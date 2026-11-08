import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Brock's Grit",
		'fr-fr': "Vaillance de Pierre",
		'es-es': "Valentía de Brock",
		'it-it': "Tenacia di Brock",
		'pt-br': "Valentia do Brock",
		'de-de': "Rockos Durchhaltevermögen"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Choisissez une combinaison de 6 cartes de Pokémon et d'Énergies de base dans votre pile de défausse et mélangez-les avec votre deck.",
		'en-us': "Shuffle 6 in any combination of Pokémon and basic Energy cards from your discard pile into your deck.",
		'es-es': "Pon, en cualquier combinación, 6 cartas de Pokémon y de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
		'it-it': "Rimischia sei carte Pokémon e Energia base, in qualsiasi combinazione, dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe qualquer combinação de 6 cards entre Pokémon e Energia básica da sua pilha de descarte para o seu baralho.",
		'de-de': "Mische eine beliebige Kombination aus 6 Pokémon- und Basis-Energiekarten von deinem Ablagestapel zurück in dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 293434,
		tcgplayer: 124087
	}
}

export default card
