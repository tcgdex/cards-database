import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Greedent",
		fr: "Rongrigou",
		es: "Greedent",
		de: "Schlaraffel",
		it: "Greedent",
		pt: "Greedent",
		'es-mx': "Greedent"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gluttonous Tail",
			fr: "Queue Gourmande",
			es: "Cola Codiciosa",
			de: "Gefräßiger Schweif",
			it: "Coda Vorace",
			pt: "Cauda Gulosa",
			'es-mx': "Cola Glotona"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			'es-mx': "Roba 2 cartas."
		},

		damage: 60
	}],

	retreat: 2,
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
