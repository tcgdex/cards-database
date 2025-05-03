import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Cloyster"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Shellder"
	},

	description: {
		en: "Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Guard Press"
		},

		damage: 50,
		cost: ["Water", "Water"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card