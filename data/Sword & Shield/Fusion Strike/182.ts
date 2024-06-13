import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [227],
	set: Set,

	name: {
		en: "Skarmory",
		fr: "Airmure",
		es: "Skarmory",
		it: "Skarmory",
		pt: "Skarmory",
		de: "Panzaeron"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Megumi Higuchi",

	description: {
		en: "Its body is draped in steel armor. It looks heavy, but it can fly at speeds of up to 185 miles an hour!"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Steel Wing"
		},

		damage: 30,

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Slicing Blade"
		},

		damage: 110
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card