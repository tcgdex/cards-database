import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [81],
	hp: 60,
	types: ["Lightning"],

	description: {
		'en-us': "The electromagnetic waves emitted by the units\nat the sides of its head expel antigravity, which\nallows it to float.",
		'fr-fr': "Les ondes électromagnétiques émises par ses extrémités lui permettent de défier les lois de la gravité et de flotter."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Lightning Ball",
			'fr-fr': "Boule Éclair"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card