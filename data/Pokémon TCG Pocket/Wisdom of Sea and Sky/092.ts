import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Onix"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		en: "As it digs through the ground, it absorbs many\nhard objects. This is what makes its body so solid."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card