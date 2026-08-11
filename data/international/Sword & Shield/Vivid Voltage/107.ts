import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [551],

	name: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
		'es-es': "Sandile",
		'it-it': "Sandile",
		'pt-br': "Sandile",
		'de-de': "Ganovil"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dredge Up",
				'fr-fr': "Extraction",
				'es-es': "Ventilar",
				'it-it': "Dragaggio",
				'pt-br': "Dragar",
				'de-de': "Ausbaggern"
			},
			effect: {
				'en-us': "Discard the top 3 cards of your opponent's deck.",
				'fr-fr': "Défaussez les 3 cartes du dessus du deck de votre adversaire.",
				'es-es': "Descarta las 3 primeras cartas de la baraja de tu rival.",
				'it-it': "Scarta le prime tre carte del mazzo del tuo avversario.",
				'pt-br': "Descarte as 3 cartas de cima do baralho do seu oponente.",
				'de-de': "Lege die obersten 3 Karten des Decks deines Gegners auf seinen Ablagestapel."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Sandile's still not good at hunting, so it mostly eats things that have collapsed in the desert. It's called \"the cleaner of the desert.\""
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511955,
				tcgplayer: 226560
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511955,
				tcgplayer: 226560
			}
		},
	],
}

export default card
