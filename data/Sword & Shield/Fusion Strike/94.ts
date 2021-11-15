import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Rotom",
		fr: "Motisma",
		es: "Rotom",
		it: "Rotom",
		pt: "Rotom",
		de: "Rotom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Sekio",

	description: {
		en: "With a body made of plasma, it can inhabit all sorts of machines. It loves to surprise others."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Surprise Short"
		},

		effect: {
			en: "Discard all Pokémon Tools from all of your opponent's Pokémon."
		}
	}, {
		cost: ["Lightning"],

		name: {
			en: "Static Shock"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card