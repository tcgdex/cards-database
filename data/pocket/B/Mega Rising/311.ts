import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Diglett"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [50],
	hp: 50,
	types: ["Metal"],

	description: {
		'en-us': "The metal-rich geology of this Pokémon's habitat\ncaused it to develop steel whiskers on its head."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headbutt"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card