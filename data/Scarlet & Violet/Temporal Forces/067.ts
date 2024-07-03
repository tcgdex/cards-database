import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		en: "Latias",
		fr: "Latias",
		es: "Latias",
		it: "Latias",
		pt: "Latias",
		de: "Latias"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
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
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Lagoon Flight",
			fr: "Survol du Lagon",
			es: "Vuelo Laguna",
			it: "Volo Lagunare",
			pt: "Sobrevoar a Laguna",
			de: "Lagunenflug"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card