import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Poliwag"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [60],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "For Poliwag, swimming is easier than walking.\nThe swirl pattern on its belly is actually part of\nthe Pokémon's innards showing through the skin."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Call for Family"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Put 1 random Poliwag from your deck onto your Bench."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card