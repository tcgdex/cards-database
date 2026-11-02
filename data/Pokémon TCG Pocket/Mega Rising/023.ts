import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Phantump",
		fr: "Brocélôme"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [708],
	hp: 60,
	types: ["Grass"],

	description: {
		en: "With a voice like a human child's, it cries out to\nlure adults deep into the forest, getting them lost\namong the trees.",
		fr: "Il imite des cris d'enfants pour pousser les adultes à venir se perdre au plus profond de la forêt."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Branch Poke",
			fr: "Tapotige"
		},

		damage: 40,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card