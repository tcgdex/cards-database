import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Stantler",
		fr: "Cerfrousse",
		es: "Stantler",
		it: "Stantler",
		pt: "Stantler",
		de: "Damhirplex"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		en: "The curved antlers subtly change the flow of air to create a strange space where reality is distorted."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rear Kick"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wild Dive"
		},

		damage: "30×",

		effect: {
			en: "This attack does 30 damage for each Energy attached to your opponent's Active Pokémon."
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