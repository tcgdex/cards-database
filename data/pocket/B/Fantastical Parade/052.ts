import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [311],

	name: {
		'en-us': "Plusle"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "This Pokémon absorbs electricity from telephone\npoles. It shorts out the electricity stored inside its\nbody to create noises."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Electric Tail"
		},

		damage: 10,
		cost: ["Lightning"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card