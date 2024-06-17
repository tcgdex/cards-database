import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		en: "Caterpie",
		fr: "Chenipan",
		es: "Caterpie",
		it: "Caterpie",
		pt: "Caterpie",
		de: "Raupy"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Mitsuhiro Arita",

	description: {
		en: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flock"
		},

		effect: {
			en: "Search your deck for a Caterpie and put it onto your Bench. Then, shuffle your deck."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Bug Bite"
		},

		damage: 10
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card