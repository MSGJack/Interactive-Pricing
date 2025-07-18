import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="Main">
  <div class="mask">
    <div class="headings">
    <h3>Simple, traffic-based pricing</h3>
    <p class="signup">Sign-up for our 30-day trial. No credit card required.</p>
    </div>
    <img src="pattern-circles.svg" alt="circle images"/>
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
`;

const PRICING_TIERS = [
  { views: "10K", price: 8 },
  { views: "50K", price: 12 },
  { views: "100K", price: 16 },
  { views: "500K", price: 24 },
  { views: "1M", price: 36 },
];
const rangeInput = document.getElementById("data-input") as HTMLInputElement;
const mobileRangeInput = document.getElementById(
  "mobile-data-input"
) as HTMLInputElement;
const outputValues = document.getElementById(
  "output-value"
) as HTMLInputElement;
const pageView = document.getElementById("view-value");

function sliderBG(input: HTMLInputElement) {
  const position = +input.value;
  const min = +input.min;
  const max = +input.max;
  console.log(position, min, max);

  const percent = ((position - min) / (max - min)) * 100;

  input.style.background = `linear-gradient(to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 86%, 45%) ${percent}%,
    hsl(224, 65%, 95%) ${percent}%,
    hsl(224, 65%, 95%) 100%)`;

  const { price, views } = PRICING_TIERS[position];
  //if (outputPrice) outputPrice.textContent = `$${price}`;
  if (pageView) pageView.textContent = `${views} PAGEVIEWS `;
  outputValues.textContent = `$${price}.00 `;
}

function getActiveSlider(): HTMLInputElement {
  return window.innerWidth >= 600 ? rangeInput : mobileRangeInput;
}

function syncSliders(value: string) {
  rangeInput.value = value;
  mobileRangeInput.value = value;
  sliderBG(getActiveSlider());
}

sliderBG(getActiveSlider());

//sliderBG(rangeInput);

rangeInput.addEventListener("input", () => {
  sliderBG(rangeInput);
});

rangeInput.addEventListener("input", () => syncSliders(rangeInput.value));
mobileRangeInput.addEventListener("input", () =>
  syncSliders(mobileRangeInput.value)
);

