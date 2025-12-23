import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Sunflora",
		fr: "Héliatronc"
	},

	illustrator: "Yumi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [192],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Sunkern"
	},

	description: {
		en: "In the daytime, it rushes about in a hectic\nmanner, but it comes to a complete stop when\nthe sun sets.",
		fr: "En journée, il court énergiquement dans tous les sens, mais il s'arrête net dès que la nuit tombe."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil"
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