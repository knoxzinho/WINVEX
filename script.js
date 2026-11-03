const toggle=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));document.querySelectorAll(".faq-list details").forEach(item=>item.addEventListener("toggle",()=>{if(item.open){document.querySelectorAll(".faq-list details").forEach(other=>{if(other!==item)other.open=false;});}}));
/* WINVEX 0.3.9 — timeline version tabs */
document.querySelectorAll(".timeline-tab").forEach((tab,index,allTabs)=>{
  tab.addEventListener("click",()=>{
    const key=tab.dataset.timeline;
    allTabs.forEach(item=>{
      const active=item===tab;
      item.classList.toggle("is-active",active);
      item.setAttribute("aria-selected",String(active));
      item.tabIndex=active?0:-1;
    });
    document.querySelectorAll(".timeline-content[data-panel]").forEach(panel=>{
      const active=panel.dataset.panel===key;
      panel.hidden=!active;
      panel.classList.toggle("is-active",active);
    });
  });
  tab.addEventListener("keydown",event=>{
    if(!["ArrowRight","ArrowLeft","Home","End"].includes(event.key))return;
    event.preventDefault();
    let next=index;
    if(event.key==="ArrowRight")next=(index+1)%allTabs.length;
    if(event.key==="ArrowLeft")next=(index-1+allTabs.length)%allTabs.length;
    if(event.key==="Home")next=0;
    if(event.key==="End")next=allTabs.length-1;
    allTabs[next].focus();
    allTabs[next].click();
  });
});
