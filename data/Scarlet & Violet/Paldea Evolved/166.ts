import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [924],
	set: Set,

	name: {
		fr: "Compagnol",
		en: "Tandemaus",
		es: "Tandemaus",
		it: "Tandemaus",
		pt: "Tandemaus",
		de: "Zwieps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Collecte",
			en: "Collect",
			es: "Coleccionar",
			it: "Tassa",
			pt: "Coleta",
			de: "Sammeln"
		},

		effect: {
			fr: "Piochez 2 cartes.",
			en: "Draw 2 cards.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Gifle Douce",
			en: "Gentle Slap",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			de: "Sanfter Hieb"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Oswaldo KATO"
}

export default card