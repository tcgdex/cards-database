import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Trubbish",
		fr: "Miamiasme",
		es: "Trubbish",
		it: "Trubbish",
		pt: "Trubbish",
		de: "Unratütox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		en: "This Pokémon was born from a bag stuffed with trash. Galarian Weezing relish the fumes belched by Trubbish."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Call for Family"
		},

		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Super Poison Breath"
		},

		damage: 20,

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card