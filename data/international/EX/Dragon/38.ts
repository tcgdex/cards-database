import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Ninjask",
		'fr-fr': "Ninjask",
		'de-de': "Ninjask"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [291],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Nincada",
		'fr-fr': "Ningale"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'de-de': "Supersonic"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending ´Pokémon is now Confused."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sonic Wing",
				'fr-fr': "Aile supersonique",
				'de-de': "Sonic Wing"
			},
			effect: {
				'en-us': "This attack's damage is not affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "This attack's damage is not affected by Resistance."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87784,
				cardmarket: 275915
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87784,
				cardmarket: 275915
			},
		},
	],

}

export default card
