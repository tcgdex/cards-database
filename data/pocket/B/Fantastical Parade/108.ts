import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [717],

	name: {
		'en-us': "Yveltal"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'en-us': "When its life comes to an end, it absorbs\nthe life energy of every living thing\nand turns into a cocoon once more."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Evil Crash"
		},

		damage: 90,
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			'en-us': "Discard a random Energy from both Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card