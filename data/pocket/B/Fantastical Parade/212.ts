import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [139],

	name: {
		'en-us': "Omastar"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Omanyte"
	},

	description: {
		'en-us': "Weighed down by a large and heavy shell,\nOmastar couldn't move very fast. Some say it\nwent extinct because it was unable to catch food."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Ancient Whirlpool"
		},

		damage: 70,
		cost: ["Water", "Colorless", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't attack."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card