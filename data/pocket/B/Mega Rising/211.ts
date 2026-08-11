import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wooloo"
	},

	illustrator: "Yoko Hishida",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [831],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "If its fleece grows too long, Wooloo won't be\nable to move. Cloth made with the wool of this\nPokémon is surprisingly strong."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Continuous Tumble"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 40 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card