import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [91],

	name: {
		'en-us': "Cloyster"
	},

	illustrator: "whomor Inc.",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Shellder"
	},

	description: {
		'en-us': "Cloyster that live in seas with harsh tidal currents\ngrow large, sharp spikes on their shells."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Guard Press"
		},

		damage: 50,
		cost: ["Water", "Water"],

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card