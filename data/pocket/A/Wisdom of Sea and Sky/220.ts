import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [200],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "This Pokémon startles people in the middle of\nthe night. It gathers fear as its energy.",
		'fr-fr': "Il fait peur aux gens en pleine nuit et se nourrit de leur frayeur."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mumble",
			'fr-fr': "Murmure"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card