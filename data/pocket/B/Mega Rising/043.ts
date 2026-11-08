import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chandelure"
	},

	illustrator: "Taira Akitsu",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [609],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Lampent"
	},

	description: {
		'en-us': "In homes illuminated by Chandelure instead of\nlights, funerals were a constant occurrence—\nor so it's said."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Slow Sear"
		},

		effect: {
			'en-us': "Once during your turn, you may discard the top card of your opponent's deck."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Heat Blast"
		},

		damage: 80,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card