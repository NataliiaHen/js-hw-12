import '../sass/main.scss';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service'
import getRefs from './get-refs'

const refs = getRefs()

refs.searchForm.addEventListener('submit', onSearch);

console.log();
function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(error => console.log(error))
    .finally(() => form.reset())
}


function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

