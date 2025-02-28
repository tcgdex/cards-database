import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Misdreavus"
	},

	illustrator: "Miki Tanaka",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	description: {
		en: "This Pokémon startles people in the middle of the night. It gathers fear as its energy."
	},

	attacks: [{
		name: {
			en: "Confuse Ray"
		},

		cost: ["Psychic"],
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
