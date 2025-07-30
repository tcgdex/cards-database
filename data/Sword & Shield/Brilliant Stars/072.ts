import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [237],
	set: Set,

	name: {
		en: "Hitmontop",
		fr: "Kapoera",
		es: "Hitmontop",
		it: "Hitmontop",
		pt: "Hitmontop",
		de: "Kapoera"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spinning Draw",
			fr: "Pioche Tournante",
			es: "Robo Giratorio",
			it: "Pesca Rotante",
			pt: "Compra Giratória",
			de: "Drehender Zug"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre 1 carta.",
			de: "Ziehe 1 Karte."
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Cyclone Kick",
			fr: "Pied Cyclone",
			es: "Patada Ciclón",
			it: "Calciovento",
			pt: "Chute Ciclone",
			de: "Wirbeltritt"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608522
	}
}

export default card