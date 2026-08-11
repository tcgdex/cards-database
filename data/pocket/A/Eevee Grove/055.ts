import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "Its ability to evolve into many forms allows it to\nadapt smoothly and perfectly to any environment.",
		'fr-fr': "Ses multiples évolutions lui permettent de s'adapter à tout type de milieu naturel."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card