import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Metang",
		'fr-fr': "Metang",
		'de-de': "Metang"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [375],

	hp: 70,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Levitate",
				'fr-fr': "Lévitation",
				'de-de': "Levitate"
			},
			effect: {
				'en-us': "If Metang has any Energy attached to it, Metang's Retreat Cost is 0.",
				'fr-fr': "Si Metang possède des Énergies, son Coût de Retraite est de 0.",
				'de-de': "If Metang has any Energy attached to it, Metang's Retreat Cost is 0."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

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
				tcgplayer: 87373,
				cardmarket: 276118
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87373,
				cardmarket: 276118
			}
		},
	]
}

export default card
