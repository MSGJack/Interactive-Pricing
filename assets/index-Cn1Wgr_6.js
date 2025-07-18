(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div class="Main">
  <div class="mask">
    <div class="headings">
    <h3>Simple, traffic-based pricing</h3>
    <p class="signup">Sign-up for our 30-day trial. No credit card required.</p>
    </div>
    <img src="assets/pattern-circles.svg" alt="circle images"/>
    <div class="Card">
      <div class="Top-half">
      <div class="Card-Top">
        <span><output id="view-value"></output></span>
        <div class="slider-m">
        <input type="range" min="0" max="4" id="mobile-data-input" step="1" class="slider-desk" value="2"/>
        </div>
         <p class="Card-PM"> <span class="Card-Money"><output id="output-value"> </output> &nbsp;</span> / month</p>
      </div>
      <div class="Card-Data">
        <input type="range" min="0" max="4" id="data-input" step="1" class="slider" value="2"/>
        <div class="Card-Bill">
        <p>Monthly Billing</p>
            <label class="switch">
            <input type="checkbox" checked class="input2">
            <span class="slider2 round"></span>
            </label>
        <p>Yearly Billing</p>
        <span class="Card-Discount">25% discount</span>
         <p class="Card-Short">-25%</p>
        </div>
      </div>
      </div>
      </hr>
      <hr/>
      <div class="Card-Info">
        <div class="Card-List">
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
        </div>
        <button>Start my trial</button>
      </div>
    </div>
    </div>
  </div>
`;const v=[{views:"10K",price:8},{views:"50K",price:12},{views:"100K",price:16},{views:"500K",price:24},{views:"1M",price:36}],n=document.getElementById("data-input"),o=document.getElementById("mobile-data-input"),m=document.getElementById("output-value"),c=document.getElementById("view-value");function d(i){const s=+i.value,r=+i.min,a=+i.max;console.log(s,r,a);const e=(s-r)/(a-r)*100;i.style.background=`linear-gradient(to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 86%, 45%) ${e}%,
    hsl(224, 65%, 95%) ${e}%,
    hsl(224, 65%, 95%) 100%)`;const{price:t,views:l}=v[s];c&&(c.textContent=`${l} PAGEVIEWS `),m.textContent=`$${t}.00 `}function u(){return window.innerWidth>=600?n:o}function p(i){n.value=i,o.value=i,d(u())}d(u());n.addEventListener("input",()=>{d(n)});n.addEventListener("input",()=>p(n.value));o.addEventListener("input",()=>p(o.value));
