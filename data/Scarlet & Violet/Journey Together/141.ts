import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Squawkabilly",
		fr: "Tapatoès",
		es: "Squawkabilly",
		de: "Krawalloro",
		it: "Squawkabilly",
		pt: "Squawkabilly",
		'es-mx': "Squawkabilly"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Add On",
			fr: "Ajout",
			es: "Sumar",
			de: "Hinzufügen",
			it: "Supplemento",
			pt: "Adicionar",
			'es-mx': "Acarrear"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			'es-mx': "Roba 2 cartas."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hyper Voice",
			fr: "Mégaphone",
			es: "Vozarrón",
			de: "Schallwelle",
			it: "Granvoce",
			pt: "Hipervoz",
			'es-mx': "Hipervoz"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
