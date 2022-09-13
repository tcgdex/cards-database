import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Machoke",
		fr: "Machopeur",
		es: "Machoke",
		it: "Machoke",
		pt: "Machoke",
		de: "Maschock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
		es: "Machop",
		it: "Machop",
		pt: "Machop",
		de: "Machollo"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Strength",
			fr: "Force",
			es: "Fuerza",
			it: "Forza",
			pt: "Força",
			de: "Stärke"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Seismic Toss",
			fr: "Frappe Atlas",
			es: "Sísmico",
			it: "Movimento Sismico",
			pt: "Arremesso Sísmico",
			de: "Geowurf"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card