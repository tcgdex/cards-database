import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Karrablast",
		fr: "Carabing",
		es: "Karrablast",
		it: "Karrablast",
		pt: "Karrablast",
		de: "Laukaps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card