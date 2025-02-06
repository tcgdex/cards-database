import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo"
	},

	illustrator: "Krgc",
	rarity: "None",
	category: "Pokemon",
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Power Blast"
		},

		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
		damage: 120,

		effect: {
			en: "Discard 2 <span class=\"pfont\" title=\"Psychic\">P</span> Energy from this Pokémon."
		}
	}],

	hp: 120,

	description: {
		en: "It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments."
	},

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card
