import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [860],
	set: Set,

	name: {
		en: "Morgrem",
		fr: "Fourbelin",
		es: "Morgrem",
		it: "Morgrem",
		pt: "Morgrem",
		de: "Pelzebub"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			de: "Sanfter Hieb"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			pt: "Presa Sombria",
			de: "Fänge der Dunkelheit"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Mékayu"
}

export default card
