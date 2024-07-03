import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [602],
	set: Set,

	name: {
		fr: "Anchwatt",
		en: "Tynamo",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Choc Statique",
			en: "Static Shock",
			es: "Impacto Estático",
			it: "Shock Statico",
			pt: "Choque de Estática",
			de: "Statischer Schock"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			fr: "Foudre Minuscule",
			en: "Tiny Bolt",
			es: "Relampaguito",
			it: "Minifulmine",
			pt: "Corisquinho",
			de: "Mini-Blitz"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card