import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Cosmog",
		'fr-fr': "Cosmog",
		'es-es': "Cosmog",
		'it-it': "Cosmog",
		'pt-br': "Cosmog",
		'de-de': "Cosmog"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		789,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dust Gathering",
				'fr-fr': "Ramasse Poussière",
				'es-es': "Concentración de Polvo",
				'it-it': "Coglipolvere",
				'pt-br': "Coleta de Poeira",
				'de-de': "Staubfänger"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'es-es': "Roba 1 carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre 1 carta.",
				'de-de': "Ziehe 1 Karte."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "Its body is gaseous and frail. It slowly grows as it collects dust from the atmosphere.",
	},
}

export default card
