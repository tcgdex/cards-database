import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Houndoom"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		en: "Houndour"
	},

	description: {
		en: "Upon hearing its eerie howls, other Pokémon get\nthe shivers and head straight back to their nests."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sharp Fang"
		},

		damage: 50,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card