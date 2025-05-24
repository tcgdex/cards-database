import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [709],
	set: Set,

	name: {
		en: "Trevenant",
		fr: "Desséliande",
		es: "Trevenant",
		it: "Trevenant",
		pt: "Trevenant",
		de: "Trombork"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
		es: "Phantump",
		it: "Phantump",
		pt: "Phantump",
		de: "Paragoni"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	description: {
		en: "Small roots that extend from the tips of this Pokémon's feet can tie into the trees of the forest and give Trevenant control over them."
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			de: "Sanfter Hieb",
			es: "Bofetada Gentil",
			pt: "Tapinha",
			it: "Schiaffetto"
		},

		damage: 40
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Wood Hammer",
			fr: "Martobois",
			de: "Holzhammer",
			es: "Mazazo",
			pt: "Martelo de Madeira",
			it: "Mazzuolegno"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card