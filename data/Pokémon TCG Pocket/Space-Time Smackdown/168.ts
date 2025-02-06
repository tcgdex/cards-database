import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Cresselia"
	},

	illustrator: "rika",
	rarity: "One Star",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		en: "Shiny particles are released from its wings like a veil. It is said to represent the crescent moon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Moonlight Gain"
		},

		damage: 50,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Heal 20 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card
