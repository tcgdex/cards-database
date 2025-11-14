import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		'es-mx': "Absol",
		de: "Absol",
		it: "Absol",
		pt: "Absol"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Allure",
			fr: "Allure",
			es: "Atractivo",
			'es-mx': "Atraer",
			de: "Verlockung",
			it: "Affascinante",
			pt: "Fascinar"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Dark Cutter",
			fr: "Tranch'Obscur",
			es: "Cuchilla Oscura",
			'es-mx': "Corte Oscuro",
			de: "Dunkler Zerschneider",
			it: "Oscurotaglio",
			pt: "Cortador de Escuridão"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card