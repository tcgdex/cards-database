import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [647],
	set: Set,

	name: {
		en: "Keldeo",
		fr: "Keldeo",
		es: "Keldeo",
		it: "Keldeo",
		pt: "Keldeo",
		de: "Keldeo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Rapid Draw",
			fr: "Pioche Rapide",
			es: "Robo Rápido",
			it: "Pescalesto",
			pt: "Retirada Rápida",
			de: "Schnellzieher"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Aqua Blade",
			fr: "Hydrolame",
			es: "Hoja Agua",
			it: "Idrolama",
			pt: "Lâmina de Água",
			de: "Aquaklinge"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card