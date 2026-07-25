import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Doduo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [84],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Attack"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		en: "A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274836,
				tcgplayer: 84858
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84858,
				cardmarket: 274836
			}
		}
	],

	retreat: 0
}

export default card
