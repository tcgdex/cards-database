import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Brock’s Grit",
		'fr-fr': "Vaillance de Pierre",
		'es-es': "Valentía de Brock",
		'it-it': "Tenacia di Brock",
		'pt-br': "Valentia do Brock",
		'de-de': "Rockos Durchhaltevermögen"
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Choisissez une combinaison de 6 cartes Pokémon et cartes Énergie de base dans votre pile de défausse et mélangez-les avec votre deck.",
		'en-us': "Shuffle 6 in any combination of Pokémon and basic Energy cards from your discard pile into your deck.",
		'es-es': "Pon 6 cartas de Pokémon y de Energía Básica, en cualquier combinación, de tu pila de descartes en tu baraja y barájalas todas.",
		'it-it': "Rimischia sei carte Pokémon e Energia base, in qualsiasi combinazione, dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe 6 cartas de Pokémon e de Energia básica da sua pilha de descarte no seu baralho em qualquer combinação.",
		'de-de': "Mische eine beliebige Kombination aus 6 Pokémon und Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
	},
	trainerType: "Supporter",

}

export default card
