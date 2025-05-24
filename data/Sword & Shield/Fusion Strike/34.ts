import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [218],
	set: Set,

	name: {
		en: "Slugma",
		fr: "Limagma",
		es: "Slugma",
		it: "Slugma",
		pt: "Slugma",
		de: "Schneckmag"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	retreat: 3,
	regulationMark: "E",
	illustrator: "otumami",

	description: {
		en: "Its body is made of magma. If it doesn't keep moving, its body will cool and harden."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
			de: "Glühende Kohlen",
			es: "Carbón Activado",
			pt: "Carvão Vivo",
			it: "Carboni Ardenti"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			de: "Flackern",
			es: "Llama",
			pt: "Chama",
			it: "Fiammata"
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