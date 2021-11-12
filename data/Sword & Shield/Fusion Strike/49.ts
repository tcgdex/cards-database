import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
		es: "Centiskorch",
		it: "Centiskorch",
		pt: "Centiskorch",
		de: "Infernopod"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Sizzlipede",
		fr: "Grillepattes",
		es: "Sizzlipede",
		it: "Sizzlipede",
		pt: "Sizzlipede",
		de: "Thermopod"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		en: "While its burning body is already dangerous on its own, this excessively hostile Pokémon also has large and very sharp fangs."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Steady Firebreathing"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Blast"
		},

		damage: 100
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card