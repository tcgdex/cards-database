import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo"
	},

	illustrator: "Krgc",
	rarity: "One Star",
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
	}]
}

export default card