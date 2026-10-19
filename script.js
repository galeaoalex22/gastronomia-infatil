const offer=window.OFERTA||{};
const safeUrl=value=>{try{const u=new URL(value);return u.protocol==='https:'?u.href:null}catch{return null}};
document.querySelector('#price').textContent=offer.preco||'Consulte a oferta';
document.querySelector('#payment').textContent=offer.pagamento||'2 PDFs digitais';
document.querySelector('#individual-price').textContent=offer.precoIndividual||'R$ 19,99';
const individualCheckout=safeUrl(offer.checkoutIndividual);
const individualButton=document.querySelector('#individual-purchase');
if(individualCheckout){individualButton.href=individualCheckout;individualButton.rel='noopener';document.querySelector('#individual-note').textContent='Pagamento pela Hotmart. Confira os detalhes no checkout.'}
else{individualButton.addEventListener('click',e=>{e.preventDefault();const message=document.querySelector('#individual-note');message.textContent='A compra ainda não foi liberada. Volte em breve para conferir a oferta.';message.setAttribute('role','status')})}
const checkout=safeUrl(offer.checkout);
const note=document.querySelector('#checkout-note');
if(checkout){document.querySelectorAll('.purchase').forEach(a=>{a.href=checkout;a.rel='noopener'});note.textContent='Confira os detalhes e as condições no checkout.'}
else{document.querySelector('.purchase').addEventListener('click',e=>{e.preventDefault();note.textContent='A compra ainda não foi liberada. Volte em breve para conferir a oferta.';note.setAttribute('role','status')})}
const dialog=document.querySelector('#script-dialog');
document.querySelector('#show-script').addEventListener('click',()=>dialog.showModal());
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
document.querySelector('#dialog-cta').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
const video=safeUrl(offer.video);if(video){const player=document.createElement('video');player.src=video;player.controls=true;player.preload='metadata';player.setAttribute('aria-label','Apresentação do guia');document.querySelector('#video-area').replaceChildren(player)}
const contact=document.querySelector('#contact');document.querySelector('.faq').id='faq';
if(offer.contato&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(offer.contato)){contact.href='mailto:'+offer.contato;contact.textContent='Fale com a gente'}
