import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Yveltal"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		en: "When its life comes to an end, it absorbs\nthe life energy of every living thing\nand turns into a cocoon once more."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Evil Crash"
		},

		damage: 90,
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "Discard a random Energy from both Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card