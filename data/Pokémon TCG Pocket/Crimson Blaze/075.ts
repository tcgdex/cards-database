import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Buneary"
	},

	illustrator: "Terada Tera",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Buneary can attack by rolling up their ears and\nthen striking with the force created by unrolling\nthem. This attack becomes stronger with training."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Kick"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card