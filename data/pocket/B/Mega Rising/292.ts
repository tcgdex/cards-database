import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Moltres"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [146],
	hp: 100,
	types: ["Fire"],

	description: {
		'en-us': "It's one of the legendary bird Pokémon. When\nMoltres flaps its flaming wings, they glimmer with\na dazzling red glow."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sky Attack"
		},

		damage: 130,
		cost: ["Fire", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card