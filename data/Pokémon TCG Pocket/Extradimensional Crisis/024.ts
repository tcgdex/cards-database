import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Phantump",
		fr: "Brocélôme"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [708],
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "With a voice like a human child's, it cries out to\nlure adults deep into the forest, getting them lost\namong the trees.",
		fr: "Il imite des cris d'enfants pour pousser les adultes à venir se perdre au plus profond de la forêt."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card