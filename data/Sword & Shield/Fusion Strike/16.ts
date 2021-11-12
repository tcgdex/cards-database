import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Phantump",
		fr: "Brocélôme",
		es: "Phantump",
		it: "Phantump",
		pt: "Phantump",
		de: "Paragoni"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "OKACHEKE",

	description: {
		en: "With a voice like a human child's, it cries out to lure adults deep into the forest, getting them lost among the trees."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tackle"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Seed Bomb"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card