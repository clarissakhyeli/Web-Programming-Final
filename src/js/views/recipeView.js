import { elements } from './base';
import { Fraction } from 'fractional';

export const clearRecipe = () => {
    elements.recipe.innerHTML = '';
};
const formatCount = count => {
    if (count) {
        // count = 2.5 --> 5/2 --> 2 1/2
        // count = 0.5 --> 1/2
        const newCount = Math.round(count * 10000) / 10000;
        const [int, dec] = newCount.toString().split('.').map(el => parseInt(el, 10));

        if (!dec) return newCount;

        if (int === 0) {
            const fr = new Fraction(newCount);
            return `${fr.numerator}/${fr.denominator}`;
        } else {
            const fr = new Fraction(newCount - int);
            return `${int} ${fr.numerator}/${fr.denominator}`;
        }
    }
    return '?';
};

export const renderRecipe = (recipe, isLiked) => {
    const markup = `
        <figure class="recipe__fig">
            <img src="${recipe.img}" alt="${recipe.title}" class="recipe__img">
            <h1 class="recipe__title">
                <button class="recipe__love">
                    <svg class="header__likes">
                        ${isLiked ? '<path d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0l-1.135 1.042-1.136-1.042c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"></path>' : '<path d="M17.19 4.156c-1.672-1.535-4.383-1.535-6.055 0l-1.135 1.041-1.136-1.041c-1.672-1.535-4.382-1.535-6.054 0-1.881 1.726-1.881 4.519 0 6.245l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.245zM16.124 9.375l-6.124 5.715-6.125-5.715c-0.617-0.567-0.856-1.307-0.856-2.094s0.138-1.433 0.756-1.999c0.545-0.501 1.278-0.777 2.063-0.777s1.517 0.476 2.062 0.978l2.1 1.825 2.099-1.826c0.546-0.502 1.278-0.978 2.063-0.978s1.518 0.276 2.063 0.777c0.618 0.566 0.755 1.212 0.755 1.999s-0.238 1.528-0.856 2.095z"></path>'}
                    </svg>
                </button>
                <span>${recipe.title}
                </span>
            </h1>

        </figure>

        <div class="recipe__details">
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <path d="M10 4c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.895-2 2c0 1.104 0.896 2 2 2zM15.978 11.583c-0.385-1.775-1.058-4.688-2.042-5.894-0.957-1.173-2.885-1.222-3.936-1.222v0c-1.051 0-2.979 0.049-3.936 1.222-0.984 1.206-1.657 4.119-2.042 5.894-0.213 0.983 1.154 1.344 1.511 0.355 0.531-1.473 0.941-2.71 1.839-3.736 0.472 2.907-1.27 7.966-1.372 10.798 0 0.552 0.448 1 1 1 0.426 0 0.79-0.266 0.934-0.642 0.457-1.587 2.066-6.003 2.066-6.003v0 0c0 0 1.609 4.416 2.066 6.003 0.144 0.376 0.508 0.642 0.934 0.642 0.552 0 1-0.448 1-1-0.102-2.832-1.844-7.891-1.372-10.797 0.898 1.026 1.308 2.263 1.839 3.736 0.356 0.988 1.724 0.627 1.511-0.356z"></path>
                </svg>
                <span class="recipe__info-text"> size &nbsp </span>
                <span class="recipe__info-data recipe__info-data--size"> ${recipe.size}</span>

                <div class="recipe__info-buttons">
                    <button class="btn-tiny btn-decrease-size">
                        <svg>
                            <path d="M10 1.6c-4.639 0-8.4 3.761-8.4 8.4s3.761 8.4 8.4 8.4 8.4-3.761 8.4-8.4c0-4.639-3.761-8.4-8.4-8.4zM15 11h-10v-2h10v2z"></path>
                        </svg>
                    </button>
                    <button class="btn-tiny btn-increase-size">
                        <svg>
                            <path d="M10 1.6c-4.639 0-8.4 3.761-8.4 8.4s3.761 8.4 8.4 8.4 8.4-3.761 8.4-8.4c0-4.639-3.761-8.4-8.4-8.4zM15 11h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <path d="M7.228,11.464H1.996c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232c0.723,0,1.308-0.586,1.308-1.308v-5.232C8.536,12.051,7.95,11.464,7.228,11.464z M7.228,17.351c0,0.361-0.293,0.654-0.654,0.654H2.649c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z M17.692,11.464H12.46c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232c0.722,0,1.308-0.586,1.308-1.308v-5.232C19,12.051,18.414,11.464,17.692,11.464z M17.692,17.351c0,0.361-0.293,0.654-0.654,0.654h-3.924c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.293-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z M7.228,1H1.996C1.273,1,0.688,1.585,0.688,2.308V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232c0.723,0,1.308-0.585,1.308-1.308V2.308C8.536,1.585,7.95,1,7.228,1z M7.228,6.886c0,0.361-0.293,0.654-0.654,0.654H2.649c-0.361,0-0.654-0.292-0.654-0.654V2.962c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.292,0.654,0.654V6.886z M17.692,1H12.46c-0.723,0-1.308,0.585-1.308,1.308V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232C18.414,8.848,19,8.263,19,7.54V2.308C19,1.585,18.414,1,17.692,1z M17.692,6.886c0,0.361-0.293,0.654-0.654,0.654h-3.924c-0.361,0-0.654-0.292-0.654-0.654V2.962c0-0.361,0.293-0.654,0.654-0.654h3.924c0.361,0,0.654,0.292,0.654,0.654V6.886z"></path>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
                <span class="recipe__info-text"> piece(s)</span>

                <div class="recipe__info-buttons">
                    <button class="btn-tiny btn-decrease">
                        <svg>
                            <path d="M10 1.6c-4.639 0-8.4 3.761-8.4 8.4s3.761 8.4 8.4 8.4 8.4-3.761 8.4-8.4c0-4.639-3.761-8.4-8.4-8.4zM15 11h-10v-2h10v2z"></path>
                        </svg>
                    </button>
                    <button class="btn-tiny btn-increase">
                        <svg>
                            <path d="M10 1.6c-4.639 0-8.4 3.761-8.4 8.4s3.761 8.4 8.4 8.4 8.4-3.761 8.4-8.4c0-4.639-3.761-8.4-8.4-8.4zM15 11h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <path d="M4.319,8.257c-0.242,0-0.438,0.196-0.438,0.438c0,0.243,0.196,0.438,0.438,0.438c0.242,0,0.438-0.196,0.438-0.438C4.757,8.454,4.561,8.257,4.319,8.257 M7.599,10.396c0,0.08,0.017,0.148,0.05,0.204c0.034,0.056,0.076,0.104,0.129,0.144c0.051,0.04,0.112,0.072,0.182,0.097c0.041,0.015,0.068,0.028,0.098,0.04V9.918C7.925,9.927,7.832,9.958,7.747,10.02C7.648,10.095,7.599,10.22,7.599,10.396 M15.274,6.505H1.252c-0.484,0-0.876,0.392-0.876,0.876v7.887c0,0.484,0.392,0.876,0.876,0.876h14.022c0.483,0,0.876-0.392,0.876-0.876V7.381C16.15,6.897,15.758,6.505,15.274,6.505M1.69,7.381c0.242,0,0.438,0.196,0.438,0.438S1.932,8.257,1.69,8.257c-0.242,0-0.438-0.196-0.438-0.438S1.448,7.381,1.69,7.381M1.69,15.269c-0.242,0-0.438-0.196-0.438-0.438s0.196-0.438,0.438-0.438c0.242,0,0.438,0.195,0.438,0.438S1.932,15.269,1.69,15.269M14.836,15.269c-0.242,0-0.438-0.196-0.438-0.438s0.196-0.438,0.438-0.438s0.438,0.195,0.438,0.438S15.078,15.269,14.836,15.269M15.274,13.596c-0.138-0.049-0.283-0.08-0.438-0.08c-0.726,0-1.314,0.589-1.314,1.314c0,0.155,0.031,0.301,0.08,0.438H2.924c0.049-0.138,0.081-0.283,0.081-0.438c0-0.726-0.589-1.314-1.315-1.314c-0.155,0-0.3,0.031-0.438,0.08V9.053C1.39,9.103,1.535,9.134,1.69,9.134c0.726,0,1.315-0.588,1.315-1.314c0-0.155-0.032-0.301-0.081-0.438h10.678c-0.049,0.137-0.08,0.283-0.08,0.438c0,0.726,0.589,1.314,1.314,1.314c0.155,0,0.301-0.031,0.438-0.081V13.596z M14.836,8.257c-0.242,0-0.438-0.196-0.438-0.438s0.196-0.438,0.438-0.438s0.438,0.196,0.438,0.438S15.078,8.257,14.836,8.257 M12.207,13.516c-0.242,0-0.438,0.196-0.438,0.438s0.196,0.438,0.438,0.438s0.438-0.196,0.438-0.438S12.449,13.516,12.207,13.516 M8.812,11.746c-0.059-0.043-0.126-0.078-0.199-0.104c-0.047-0.017-0.081-0.031-0.117-0.047v1.12c0.137-0.021,0.237-0.064,0.336-0.143c0.116-0.09,0.174-0.235,0.174-0.435c0-0.092-0.018-0.17-0.053-0.233C8.918,11.842,8.87,11.788,8.812,11.746 M18.78,3.875H4.757c-0.484,0-0.876,0.392-0.876,0.876V5.19c0,0.242,0.196,0.438,0.438,0.438c0.242,0,0.438-0.196,0.438-0.438V4.752H18.78v7.888h-1.315c-0.242,0-0.438,0.196-0.438,0.438c0,0.243,0.195,0.438,0.438,0.438h1.315c0.483,0,0.876-0.393,0.876-0.876V4.752C19.656,4.268,19.264,3.875,18.78,3.875 M8.263,8.257c-1.694,0-3.067,1.374-3.067,3.067c0,1.695,1.373,3.068,3.067,3.068c1.695,0,3.067-1.373,3.067-3.068C11.33,9.631,9.958,8.257,8.263,8.257 M9.488,12.543c-0.062,0.137-0.147,0.251-0.255,0.342c-0.108,0.092-0.234,0.161-0.378,0.209c-0.123,0.041-0.229,0.063-0.359,0.075v0.347H8.058v-0.347c-0.143-0.009-0.258-0.032-0.388-0.078c-0.152-0.053-0.281-0.128-0.388-0.226c-0.108-0.098-0.191-0.217-0.25-0.359c-0.059-0.143-0.087-0.307-0.083-0.492h0.575c-0.004,0.219,0.046,0.391,0.146,0.518c0.088,0.109,0.207,0.165,0.388,0.185v-1.211c-0.102-0.031-0.189-0.067-0.3-0.109c-0.136-0.051-0.259-0.116-0.368-0.198c-0.109-0.082-0.198-0.183-0.265-0.306c-0.067-0.123-0.101-0.275-0.101-0.457c0-0.159,0.031-0.298,0.093-0.419c0.062-0.121,0.146-0.222,0.252-0.303S7.597,9.57,7.735,9.527C7.85,9.491,7.944,9.474,8.058,9.468V9.134h0.438v0.333c0.114,0.005,0.207,0.021,0.319,0.054c0.134,0.04,0.251,0.099,0.351,0.179c0.099,0.079,0.178,0.18,0.237,0.303c0.059,0.122,0.088,0.265,0.088,0.427H8.916c-0.007-0.169-0.051-0.297-0.134-0.387C8.712,9.968,8.626,9.932,8.496,9.919v1.059c0.116,0.035,0.213,0.074,0.333,0.118c0.145,0.053,0.272,0.121,0.383,0.203c0.111,0.083,0.2,0.186,0.268,0.308c0.067,0.123,0.101,0.273,0.101,0.453C9.581,12.244,9.549,12.406,9.488,12.543"></path>
                </svg>
                <span class="recipe__info-text"> RM &nbsp </span>
                <span class="recipe__info-data recipe__info-data--total"> ${recipe.total}</span>
            </div>
        </div>

        <div class="recipe__ingredients">
            <button class="btn-small recipe__btn recipe__btn--add">
                <svg class="search__icon">
                    <path d="M13 17c0 1.104 0.894 2 2 2 1.104 0 2-0.896 2-2 0-1.106-0.896-2-2-2-1.106 0-2 0.894-2 2zM3 17c0 1.104 0.895 2 2 2 1.103 0 2-0.896 2-2 0-1.106-0.897-2-2-2-1.105 0-2 0.894-2 2zM6.547 12.172l11.068-3.162c0.211-0.061 0.385-0.289 0.385-0.51v-5.5h-14v-1.6c0-0.22-0.181-0.4-0.399-0.4h-3.202c-0.219 0-0.399 0.18-0.399 0.4v1.6h2l1.91 8.957 0.090 0.943v1.649c0 0.219 0.18 0.4 0.4 0.4h13.2c0.22 0 0.4-0.182 0.4-0.4v-1.549h-11.248c-1.15 0-1.174-0.551-0.205-0.828z"></path>
                </svg>
                <span>Add to cart</span>
            </button>
        </div>
    `;
    elements.recipe.insertAdjacentHTML('afterbegin', markup);
};

export const renderPayform = (total) => {
    const markup = `
    <div class="payform active" id="payform">
        <div class="payform-header">
            <div class="payform-title">Check out</div>
        </div>
        <div class="payform-body">
            <div class="panel-body">
                <div class="progress-bar">
                    <div class="step active"></div>
                    <div class="step active"></div>
                    <div class="step"></div>
                    <div class="step"></div>
                </div>
            
                <div class="payment-method">
                <label for="card" class="method card">
                    <div class="card-logos">
                    <img src="img/visa_logo.png"/>
                    <img src="img/mastercard_logo.jpg"/>
                    </div>
            
                    <div class="radio-input">
                    <input id="card" type="radio" name="payment">
                    Pay RM ${total} with credit card
                    </div>
                </label>
            
                <label for="paypal" class="method paypal">
                    <div class="card-logos">
                        <img src="img/paypal_logo.png"/>
                    </div>
                    <div class="radio-input">
                    <input id="paypal" type="radio" name="payment">
                    Pay RM ${total} with PayPal
                    </div>
                </label>
                </div>
            
                <div class="input-fields">
                <div class="column-1">
                    <label for="cardholder">Cardholder's Name</label>
                    <input class="validation" type="text" id="cardholder" />
            
                    <div class="small-inputs">
                    <div>
                        <label for="date">Valid thru</label>
                        <input class="validation" type="text" id="date" placeholder="MM / YY" />
                    </div>
            
                    <div>
                        <label for="verification">CVV / CVC *</label>
                        <input class="validation" type="password" id="verification"/>
                    </div>
                    </div>
            
                </div>
                <div class="column-2">
                    <label for="cardnumber">Card Number</label>
                    <input class="validation" type="password" id="cardnumber"/>
            
                    <span class="info">* CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number.</span>
                </div>
                </div>
            </div>
            
            <div class="panel-footer">
                <button class="btn back-btn to-shipform">Back</button>
                <button class="btn next-btn">Confirm</button>
            </div>
        </div>
    </div>
    `;
    elements.popup.innerHTML = markup;
};

export const renderShippingform = () => {
    const markup = `
    <div class="payform active" id="payform">
        <div class="payform-header">
            <div class="payform-title">Shipping</div>
        </div>
        <div class="payform-body">
            <div class="panel-body">
                <div class="progress-bar">
                    <div class="step active"></div>
                    <div class="step"></div>
                    <div class="step"></div>
                    <div class="step"></div>
                </div>
            
                <div class="input-fields">
                <div class="column-1">
                    <label for="firstname">First Name</label>
                    <input class="validation" type="text" id="firstname" />
                    <div class="small-inputs">
                        <div>
                            <label for="addressNo">Address No.</label>
                            <input class="validation" type="text" id="addressNo" placeholder="No 5" />
                        </div>
                
                        <div>
                            <label for="street">Street</label>
                            <input class="validation" type="text" id="street" placeholder="Jalan Universiti"/>
                        </div>
                    </div>

                    <div class="small-inputs">
                        <div>
                            <label for="city">City</label>
                            <input class="validation" type="text" id="city" placeholder="Subang Jaya" />
                        </div>
                
                        <div>
                            <label for="state">State</label>
                            <input class="validation" type="text" id="state" placeholder="Selangor"/>
                        </div>
                    </div>
            
                </div>
                <div class="column-2">
                    <label for="lastname">Last Name</label>
                    <input class="validation" type="text" id="lastname" />
                </div>
                </div>
            </div>
            
            <div class="panel-footer">
                <button class="btn back-btn">Back</button>
                <button class="btn next-btn to-payform">Pay</button>
            </div>
        </div>
    </div>
    `;
    elements.popup.innerHTML = markup;
};

export const renderSuccessMessage = () => {
    const markup = `
    <div class="message active" id="message">
    <div class="toast__container">
        <div class="toast__cell">
        
        <div class="toast toast--green">
        <div class="toast__icon">
            <svg version="1.1" class="toast__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <g><g><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z"></path>
            </g></g>
            </svg>
        </div>
        <div class="toast__content">
            <p class="toast__type">Success</p>
            <p class="toast__message">Payment successfully</p>
        </div>
        <div class="toast__close">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642">
        <path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"></path>
        </svg>
        </div>
    </div>
    </div>
    `;
    elements.popup.innerHTML = markup;
};

export const updateServingsIngredients = recipe => {
    // Update servings
    document.querySelector('.recipe__info-data--people').textContent = recipe.servings;
    document.querySelector('.recipe__info-data--size').textContent = recipe.size;
    document.querySelector('.recipe__info-data--total').textContent = recipe.total;

    // Update ingredeints
    const countElements = Array.from(document.querySelectorAll('.recipe__count'));
    countElements.forEach((el, i) => {
        el.textContent = formatCount(recipe.ingredients[i].count);
    });
};
