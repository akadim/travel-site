"use strict";(self.webpackChunktravel_site=self.webpackChunktravel_site||[]).push([[891],{891:(s,e,n)=>{n.r(e),n.d(e,{default:()=>i});const i=class{constructor(){this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}events(){this.closeIcon.addEventListener("click",(()=>this.closeTheModal())),document.addEventListener("keyup",(s=>this.keyPressHandler(s)))}keyPressHandler(s){27==s.keyCode&&this.closeTheModal()}openTheModal(s){this.modal.classList.add("modal--is-visible")}closeTheModal(){this.modal.classList.remove("modal--is-visible")}injectHTML(){document.body.insertAdjacentHTML("beforeend",'\n    <div class="modal">\n      <div class="modal__inner">\n        <h2\n          class="section-title section-title--blue section-title--less-margin"\n        >\n          <img src="assets/images/icons/mail.svg" class="section-title__icon" />\n          Get in <strong>Touch</strong>\n        </h2>\n        <div class="wrapper wrapper--narrow">\n          <p class="modal__description">\n            We will have an online order system in place soon. Until then,\n            connect with us on any of the platforms below!\n          </p>\n        </div>\n\n        <div class="social-icons">\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/facebook.svg" alt="Facebook"\n          /></a>\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/twitter.svg" alt="Twitter"\n          /></a>\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/instagram.svg" alt="Instagram"\n          /></a>\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/youtube.svg" alt="YouTube"\n          /></a>\n        </div>\n      </div>\n      <div class="modal__close">X</div>\n    </div>\n    ')}}}}]);