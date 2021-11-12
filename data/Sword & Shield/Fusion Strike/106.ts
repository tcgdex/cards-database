import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Toxel",
		fr: "Toxizap",
		es: "Toxel",
		it: "Toxel",
		pt: "Toxel",
		de: "Toxel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "kodama",

	description: {
		en: "It manipulates the chemical makeup of its poison to produce electricity. The voltage is weak, but it can cause a tingling paralysis."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Growl"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance)."
		}
	}, {
		cost: ["Lightning"],

		name: {
			en: "Tiny Bolt"
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