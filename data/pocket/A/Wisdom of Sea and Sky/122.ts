import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Steelix",
		'fr-fr': "Steelix"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [208],
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Onix"
	},

	description: {
		'en-us': "It is said that if an Onix lives for over 100 years,\nits composition changes to become diamond-like.",
		'fr-fr': "On raconte qu'il s'agit d'un Onix de plus de 100 ans dont la structure corporelle s'est rapprochée de celle du diamant."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact"
		},

		damage: 110,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["ho-oh"]
}

export default card