import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cleffa"
	},

	illustrator: "Tika Matsuno",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [173],
	hp: 30,
	types: ["Psychic"],

	description: {
		'en-us': "According to local rumors, Cleffa are often seen\nin places where shooting stars have fallen."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Twinkly Call"
		},

		effect: {
			'en-us': "Put a random Pokémon from your deck into your hand."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card