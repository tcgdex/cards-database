import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'de-de': "Tanhel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [374],

	hp: 50,

	types: [
		"Metal"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Levitate",
				'fr-fr': "Lévitation",
				'de-de': "Levitate"
			},
			effect: {
				'en-us': "If Beldum has any Energy attached to it, Beldum's Retreat Cost is 0.",
				'fr-fr': "Si Terhal possède des Énergies, son Coût de Retraite est de 0.",
				'de-de': "If Beldum has any Energy attached to it, Beldum's Retreat Cost is 0."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
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
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83781,
				cardmarket: 276102
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83781,
				cardmarket: 276102
			}
		},
	]
}

export default card
