import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Crabominable V",
		fr: "Crabominable V",
		es: "Crabominable V",
		it: "Crabominable V",
		pt: "Crabominable V",
		de: "Krawell V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",
	retreat: 4,
	regulationMark: "E",
	illustrator: "MUGENUP",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Trigger Avalanche"
		},

		effect: {
			en: "Discard the top 2 cards of your opponent's deck."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Destroyer Punch"
		},

		damage: "90+",

		effect: {
			en: "This attack does 60 more damage for each damage counter on your opponent's Active Pokémon."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card