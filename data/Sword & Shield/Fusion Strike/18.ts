import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		it: "Grubbin",
		pt: "Grubbin",
		de: "Mabula"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Asako Ito",

	description: {
		en: "It uses its big jaws to dig nests into the forest floor, and it loves to feed on sweet tree sap."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Energize"
		},

		effect: {
			en: "Attach a Lightning Energy card from your discard pile to this Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Surprise Attack"
		},

		damage: 50,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
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