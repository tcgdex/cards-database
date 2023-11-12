import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Mystherbe",
		en: "Oddish",
		es: "Oddish",
		it: "Oddish",
		pt: "Oddish",
		de: "Myrapla"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Mode Cool",
			en: "Feelin' Fine",
			es: "Buen Rollito",
			it: "Tuttobene",
			pt: "Sensação Boa",
			de: "Wohl fühlen"
		},

		effect: {
			fr: "Piochez une carte.",
			en: "Draw a card.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			de: "Ziehe 1 Karte."
		}
	}, {
		cost: ["Grass"],

		name: {
			fr: "Ruée",
			en: "Stampede",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card