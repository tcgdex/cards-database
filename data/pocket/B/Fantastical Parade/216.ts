import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [380],

	name: {
		'en-us': "Latias"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'en-us': "It communicates using telepathy. Its body is\ncovered in down that refracts light to make\nit invisible."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Crossing Flights"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			'en-us': "If Latios is on your Bench, this attack does 20 more damage."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card