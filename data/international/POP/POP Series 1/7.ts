import { Card } from 'models/database/card'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		'en-us': "Masquerain",
		'fr-fr': "Maskadra"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [284],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Surskit",
		'fr-fr': "Arakdo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87245,
				cardmarket: 277421
			},
		},
	],

}

export default card
