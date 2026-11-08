import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Sliggoo",
		'fr-fr': "Colimucus",
		'es-es': "Sliggoo",
		'it-it': "Sliggoo",
		'pt-br': "Sliggoo",
		'de-de': "Viscargot"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		705,
	],

	hp: 70,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Goomy",
		'fr-fr': "Mucuscule",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Division",
				'fr-fr': "Division",
				'es-es': "División",
				'it-it': "Serie",
				'pt-br': "Divisão",
				'de-de': "Teilung"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Sliggoo and put them onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 Colimucus dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 Sliggoo y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due Sliggoo e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 Sliggoo no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Viscargot und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Water",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has trouble drawing a line between friends and food. It will calmly try to melt and eat even those it gets along well with.",
	},

	thirdParty: {
		cardmarket: 297549,
		tcgplayer: 131011
	}
}

export default card
