import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Doduo",
		fr: "Doduo",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		84,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	attacks: [{
		name: {
			en: "Fury Attack"
		},

		effect: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads."
		},

		damage: "10×",
		cost: ["Colorless"]
	}]
}

export default card
