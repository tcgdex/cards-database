import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Klink",
		fr: "Tic",
		es: "Klink",
		it: "Klink",
		pt: "Klink",
		de: "Klikk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Allure",
			fr: "Allure",
			es: "Atractivo",
			it: "Affascinante",
			pt: "Fascinar",
			de: "Verlockung"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			de: "Ziehe 1 Karte."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Beam",
			fr: "Rayon",
			es: "Transmisión",
			it: "Raggio",
			pt: "Feixe",
			de: "Strahl"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
