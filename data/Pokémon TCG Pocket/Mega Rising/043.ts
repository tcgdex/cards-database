import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Chandelure"
	},

	illustrator: "Taira Akitsu",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		en: "Lampent"
	},

	description: {
		en: "In homes illuminated by Chandelure instead of\nlights, funerals were a constant occurrence—\nor so it's said."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Slow Sear"
		},

		effect: {
			en: "Once during your turn, you may discard the top card of your opponent's deck."
		}
	}],

	attacks: [{
		name: {
			en: "Heat Blast"
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