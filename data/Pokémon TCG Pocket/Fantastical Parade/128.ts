import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Sentret"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "If it encounters a foe, it will stand up on its tail,\nmaking itself look bigger than usual to intimidate\nthem."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tail Rap"
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