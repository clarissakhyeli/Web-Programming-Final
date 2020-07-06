import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader, items } from './views/base';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

export let total = 0;

/** 
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        searchView.clearButton();
        renderLoader(elements.searchRes);

            // 4) Search for recipes
        state.search.getResults(query);

        // 5) Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

if(elements.searchForm !== null){
    elements.searchForm.addEventListener('submit', e => {
        e.preventDefault();
        controlSearch();
    });
}

if(elements.searchResPages !== null){
    elements.searchResPages.addEventListener('click', e => {
        const btn = e.target.closest('.btn-inline');
        if (btn) {
            searchView.clearButton();
            const goToPage = parseInt(btn.dataset.goto, 10);
            searchView.clearResults();
            searchView.renderResults(state.search.result, goToPage);
        }
    });
}

/** 
 * RECIPE CONTROLLER
 */
const controlRecipe = async () => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search item
        if (state.search) searchView.highlightSelected(id);

        // Create new recipe object
        state.recipe = new Recipe(id);

        // Get recipe data and parse ingredients
        state.recipe.getRecipe(id);
        //state.recipe.parseIngredients();


        // Render recipe
        clearLoader();
        recipeView.renderRecipe(
            state.recipe,
            state.likes.isLiked(id)
        );
    }
};
 
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


/** 
 * LIST CONTROLLER
 */
const controlList = () => {
    alert("Added successfully!");
    // Create a new list IF there in none yet
    if (!state.list) state.list = new List();


    // Add each ingredient to the list and UI
    const item = state.list.addItem(state.recipe);
    state.list.total += item.total;
    listView.renderItem(item);
    listView.renderTotal(state.list.total);
}

// Handle delete and update list item events
if(elements.shopping !== null){
    elements.shopping.addEventListener('click', e => {
        const id = e.target.closest('.shopping__item').dataset.itemid;
    
        // Handle the delete button
        if (e.target.matches('.shopping__delete, .shopping__delete *')) {
            // Delete from state
            state.list.deleteItem(id);
    
            // Delete from UI
            listView.deleteItem(id);
            listView.renderTotal(state.list.total);
        }
    });
}


/** 
 * LIKE CONTROLLER
 */
const controlLike = () => {
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;
    // User has NOT yet liked current recipe
    if (!state.likes.isLiked(currentID)) {
        // Add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.publisher,
            state.recipe.img
        );
        // Toggle the like button
        likesView.toggleLikeBtn(true);

        // Add like to UI list
        likesView.renderLike(newLike);

    // User HAS liked current recipe
    } else {
        // Remove like from the state
        state.likes.deleteLike(currentID);

        // Toggle the like button
        likesView.toggleLikeBtn(false);

        // Remove like from UI list
        likesView.deleteLike(currentID);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// Restore liked recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes();

    //Show modal page
    const modal = document.getElementById('modal');
    openModal(modal);
    
    // Restore likes
    state.likes.readStorage();

    // Toggle like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    // Render the existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
});

if(elements.closeModalButton !== null){
    elements.closeModalButton.addEventListener('click', e => {
        const modal = elements.closeModalButton.closest('.modal');
        closeModal(modal);
    });
}

if(elements.popup !== null){
    elements.popup.addEventListener('click', e => {
        console.log(e.target.parentElement);
        if (e.target.className == 'btn back-btn') {
            const shipForm = elements.popup.firstElementChild;
            closeModal(shipForm);
        }else if(e.target.className == 'btn next-btn to-payform'){
            const shipForm = elements.popup.firstElementChild;
            if(validateShipForm()){
                recipeView.renderPayform(state.list.total);
            }else{
                alert("Please fill in the form");
            }
        }else if(e.target.className == 'btn back-btn to-shipform'){
            recipeView.renderShippingform();
        }else if(e.target.className == 'btn next-btn'){
            const payform = elements.popup.firstElementChild;
            if(validateForm()){
                recipeView.renderSuccessMessage();
                closeModal(payform);
            }else{
                alert("Please fill in the form");
            }
        }else if(e.target.parentElement.className == 'toast__close'){
            const msg = elements.popup.firstElementChild;
            closeModal(msg);
        }
    });
}

function validateShipForm() {
    var valid = true;
    if(document.getElementById("firstname").value == ''){
        valid = false;
    }
    if(document.getElementById("lastname").value == ''){
        valid = false;
    }
    if(document.getElementById("addressNo").value == ''){
        valid = false;
    }
    if(document.getElementById("street").value == ''){
        valid = false;
    }
    if(document.getElementById("city").value == ''){
        valid = false;
    }
    if(document.getElementById("state").value == ''){
        valid = false;
    }
    return valid;
}
function validateForm() {
    var valid = true;
    if(document.getElementById("cardholder").value == ''){
        valid = false;
    }
    if(document.getElementById("cardnumber").value == ''){
        valid = false;
    }
    if(document.getElementById("date").value == ''){
        valid = false;
    }
    if(document.getElementById("verification").value == ''){
        valid = false;
    }
    if(document.getElementById("cardnumber").value == ''){
        valid = false;
    }
    return valid;
}

if(elements.container !== null){
    elements.container.addEventListener('click', () =>{
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            closeModal(modal);
        })
    })
}

function openModal(modal) {
    return modal.classList.add('active');
}

function closeModal(modal) {
    return modal.classList.remove('active')
}

// Handling recipe button clicks
if(elements.recipe !== null){
    elements.recipe.addEventListener('click', e => {
        if (e.target.matches('.btn-decrease, .btn-decrease *')) {
            // Decrease button is clicked
            if (state.recipe.servings > 1) {
                state.recipe.updateServings('dec');
                recipeView.updateServingsIngredients(state.recipe);
            }
        }else if (e.target.matches('.btn-decrease-size, .btn-decrease-size *')) {
            // Decrease button is clicked
            if(state.recipe.size != "XXS"){
                state.recipe.updateSize('dec');
                recipeView.updateServingsIngredients(state.recipe);
            }
        }  else if (e.target.matches('.btn-increase, .btn-increase *')) {
            // Increase button is clicked
            state.recipe.updateServings('inc');
            recipeView.updateServingsIngredients(state.recipe);
        }else if (e.target.matches('.btn-increase-size, .btn-increase-size *')) {
            // Increase button is clicked
            if(state.recipe.size != "XXL"){
                state.recipe.updateSize('inc');
                recipeView.updateServingsIngredients(state.recipe);
            }
        } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
            // Add product to shopping list
            controlList();
            
        } else if (e.target.matches('.recipe__love, .recipe__love *')) {
            // Like controller
            controlLike();
        }
    });
}



//Pay Button
if(elements.payButton !== null){
    elements.payButton.addEventListener('click', e => {
        if(state.list.total != undefined){
            recipeView.renderShippingform();
        }
    });
}

if(elements.registerBtn !== null){
    elements.registerBtn.addEventListener('click', e => {
        event.preventDefault();
        elements.registerForm.style.display="block";
        elements.loginForm.style.display="none";
    });
}

if(elements.loginForm !== null){
    elements.loginForm.addEventListener("submit", function(e){
    });
}

