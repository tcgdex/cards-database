import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		81,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Searching Magnet",
				'fr-fr': "Aimant Inquisiteur",
			},
			effect: {
				'en-us': "Search your deck for up to 3 Metal Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 3 cartes Énergie Metal dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "It sends out electromagnetic waves, which let it float through the air. Touching it while it's eating electricity will give you a full-body shock.",
	},
}

export default card
