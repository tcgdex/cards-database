import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sunflora",
		'fr-fr': "Héliatronc"
	},

	illustrator: "Yumi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [192],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Sunkern"
	},

	description: {
		'en-us': "In the daytime, it rushes about in a hectic\nmanner, but it comes to a complete stop when\nthe sun sets.",
		'fr-fr': "En journée, il court énergiquement dans tous les sens, mais il s'arrête net dès que la nuit tombe."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil"
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