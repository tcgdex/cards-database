import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tapu Koko ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [785],
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Plasma Hurricane"
		},

		damage: 20,
		cost: ["Lightning"],

		effect: {
			'en-us': "Take a {L} Energy from your Energy Zone and attach it to this Pokémon."
		}
	}, {
		name: {
			'en-us': "Mach Bolt"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card