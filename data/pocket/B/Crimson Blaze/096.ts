import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [772],

	name: {
		'en-us': "Type: Null"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'en-us': "A Pokémon weapon developed for a specific\nmission, it went berserk during an experiment,\nso it was cryogenically frozen."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Quick Blow"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card