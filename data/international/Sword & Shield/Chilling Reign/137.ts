import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Uniforme de Survie",
		'en-us': "Expedition Uniform",
		'es-es': "Uniforme de Expedición",
		'it-it': "Completo da esplorazione",
		'pt-br': "Uniforme de Expedição",
		'de-de': "Entdecker-Set"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Regardez les 3 cartes du dessous de votre deck, puis placez-les sur le dessus de votre deck dans l'ordre de votre choix.",
		'en-us': "Look at the bottom 3 cards of your deck and put them on top of your deck in any order.",
		'es-es': "Mira las 3 últimas cartas de tu baraja y ponlas en la parte superior de tu baraja en el orden que quieras.",
		'it-it': "Guarda le ultime tre carte del tuo mazzo e mettile in cima nell'ordine che preferisci.",
		'pt-br': "Olhe as 3 cartas de baixo do seu baralho e coloque-as como as cartas de cima do seu baralho em qualquer ordem.",
		'de-de': "Schau dir die untersten 3 Karten deines Decks an und lege sie in beliebiger Reihenfolge auf dein Deck."
	},

	trainerType: "Item",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567244,
				tcgplayer: 241830
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567244,
				tcgplayer: 241830
			}
		},
	],
}

export default card
