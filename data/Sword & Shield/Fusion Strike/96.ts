import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [603],
	set: Set,

	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		en: "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity."
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Lightning Ball"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Thunder"
		},

		damage: 80,

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card