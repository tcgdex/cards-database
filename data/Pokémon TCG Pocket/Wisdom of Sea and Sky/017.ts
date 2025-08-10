import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Sunflora"
	},

	illustrator: "Yumi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Sunkern"
	},

	description: {
		en: "In the daytime, it rushes about in a hectic\nmanner, but it comes to a complete stop when\nthe sun sets."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Solar Beam"
		},

		damage: 70,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card