import base64,re,sys
def inline(s):
    for f in set(re.findall(r'works/[\w-]+\.jpg',s)):
        s=s.replace(f,'data:image/jpeg;base64,'+base64.b64encode(open(f,'rb').read()).decode())
    return s
CLOSE='href="#" onclick="parent.postMessage(\'nb-close\',\'*\');return false"'
pages={}
for name in ['os','editor','game','concepts']:
    s=open(name+'.html').read()
    s=s.replace('href="./"',CLOSE)
    for other in ['os','editor','game']:
        s=s.replace(f'href="{other}.html"',f'href="#" onclick="parent.postMessage(\'nb-open:{other}\',\'*\');return false"')
    pages[name]=base64.b64encode(inline(s).encode()).decode()
main=inline(open('index.html').read())
loader='''<script>
/* Усі сторінки вбудовані в цей файл: відкриваються поверх головної */
(() => {
const PAGES = {__PAGES__};
const dec = (b) => new TextDecoder().decode(Uint8Array.from(atob(b), (c) => c.charCodeAt(0)));
let frame = null;
function openPage(name) {
  if (!PAGES[name]) return;
  if (!frame) {
    frame = document.createElement('iframe');
    frame.title = 'Версія сайту';
    frame.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;border:0;z-index:1000;background:#0B0B0D';
    document.body.appendChild(frame);
    document.documentElement.style.overflow = 'hidden';
  }
  frame.srcdoc = dec(PAGES[name]);
}
function closePage() { if (frame) { frame.remove(); frame = null; document.documentElement.style.overflow = ''; } }
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href]'); if (!a) return;
  const m = a.getAttribute('href').match(/^(os|editor|game|concepts)\\.html$/);
  if (m) { e.preventDefault(); openPage(m[1]); }
});
addEventListener('message', (e) => {
  if (e.data === 'nb-close') closePage();
  else if (typeof e.data === 'string' && e.data.startsWith('nb-open:')) openPage(e.data.slice(8));
});
addEventListener('keydown', (e) => { if (e.key === 'Escape') closePage(); });
})();
</script>
'''.replace('__PAGES__', ','.join(f'{k}:"{v}"' for k,v in pages.items()))
main=main.replace('</body>',loader+'</body>')
open(sys.argv[1] if len(sys.argv) > 1 else 'NaidaBureau-main.html','w').write(main)
