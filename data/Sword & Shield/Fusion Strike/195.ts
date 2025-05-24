import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [704],
	set: Set,

	name: {
		en: "Goomy",
		fr: "Mucuscule",
		es: "Goomy",
		it: "Goomy",
		pt: "Goomy",
		de: "Viscora"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Dragon"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Miki Tanaka",

	description: {
		en: "Their horns are powerful sensors. As soon as Goomy pick up any sign of enemies, they go into hiding. This is how they've survived."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			es: "Placaje",
			pt: "Investida",
			it: "Azione"
		},

		damage: 10
	}, {
		cost: ["Water", "Psychic"],

		name: {
			en: "Melt",
			fr: "Dissolution",
			de: "Schmelzen",
			es: "Derretir",
			pt: "Derreter",
			it: "Liquefazione"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card