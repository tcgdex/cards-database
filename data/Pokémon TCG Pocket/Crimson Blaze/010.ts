import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Mothim"
	},

	illustrator: "saino misaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Burmy"
	},

	description: {
		en: "It flutters around at night and steals honey from\nthe Combee hive."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Cutting Wind"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card