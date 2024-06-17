import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
		es: "Centiskorch",
		it: "Centiskorch",
		pt: "Centiskorch",
		de: "Infernopod"
	},

	rarity: "Rare",
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
	retreat: 2,
	regulationMark: "E",
	illustrator: "Hasuno",

	description: {
		en: "While its burning body is already dangerous on its own, this excessively hostile Pokémon also has large and very sharp fangs."
	},

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Coil"
		},

		damage: 30,

		effect: {
			en: "During your next turn, this Pokémon's attacks do 90 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Burning Train"
		},

		damage: 120
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card