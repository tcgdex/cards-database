import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Throh",
		fr: "Judokrak",
		es: "Throh",
		it: "Throh",
		pt: "Throh",
		de: "Jiutesto"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Lunge Out",
			fr: "Allonger",
			es: "Arremeter",
			it: "Affondo Lungo",
			pt: "Bote",
			de: "Sprungangriff"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Seismic Toss",
			fr: "Frappe Atlas",
			es: "Sísmico",
			it: "Movimento Sismico",
			pt: "Arremesso Sísmico",
			de: "Geowurf"
		},

		damage: 110
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card