import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Metang",
		'fr-fr': "Metang",
		'de-de': "Metang"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [375],

	hp: 80,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Metal Load",
				'fr-fr': "Charge métallique",
				'de-de': "Metal Load"
			},
			effect: {
				'en-us': "Search your discard pile for a Metal Energy card and attach it to Metang.",
				'fr-fr': "Choisissez une carte Énergie  dans votre pile de défausse et attachez-la à Metang.",
				'de-de': "Search your discard pile for a  Energy card and attach it to Metang."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe acier",
				'de-de': "Metal Claw"
			},

			damage: 30,

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
				tcgplayer: 87371,
				cardmarket: 276095
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 87371,
				cardmarket: 276095
			}
		},
	]
}

export default card
