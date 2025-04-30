import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu"
	},

	illustrator: "Amelicart",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "This Pokémon lives in dark places untouched by sunlight. When it appears before humans, it hides itself under a cloth that resembles a Pikachu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Shadow Hit"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "This attack also does 20 damage to 1 of your Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card