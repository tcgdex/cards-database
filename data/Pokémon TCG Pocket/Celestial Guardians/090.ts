import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Makuhita"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "It grows stronger by enduring harsh training. It is a gutsy Pokémon that can withstand any attack."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Slap Push"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card