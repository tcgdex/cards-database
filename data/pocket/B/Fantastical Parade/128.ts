import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [161],

	name: {
		'en-us': "Sentret"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "If it encounters a foe, it will stand up on its tail,\nmaking itself look bigger than usual to intimidate\nthem."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tail Rap"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card