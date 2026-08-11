import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rockruff"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [744],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "This Pokémon is very friendly when it's young.\nIts disposition becomes vicious once it matures,\nbut it never forgets the kindness of its master."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Signs of Evolution"
		},

		cost: ["Fighting"],

		effect: {
			'en-us': "Put a random card that evolves from Rockruff from your deck into your hand."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card