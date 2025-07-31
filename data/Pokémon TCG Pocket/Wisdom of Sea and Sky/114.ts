import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Honchkrow"
	},

	illustrator: "Shiburingaru",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Murkrow"
	},

	description: {
		en: "It is merciless by nature. It is said that it never\nforgives the mistakes of its Murkrow followers."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dark Cutter"
		},

		damage: 60,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card