import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Tandemaus",
		fr: "Compagnol",
		es: "Tandemaus",
		it: "Tandemaus",
		pt: "Tandemaus",
		de: "Zwieps"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			it: "Tassa",
			pt: "Coleta",
			de: "Sammeln"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			de: "Sanfter Hieb"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card