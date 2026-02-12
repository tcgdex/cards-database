import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Kabuto"
	},

	illustrator: "Krgc",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Dome Fossil"
	},

	description: {
		en: "This species is almost entirely extinct. Kabuto\nmolt every three days, making their shells harder\nand harder."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Shell Attack"
		},

		damage: 40,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card