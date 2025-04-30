import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Giratina"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		en: "This Pokémon is said to live in a world on the reverse side of ours, where common knowledge is distorted and strange."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Crisis Dive"
		},

		damage: 120,
		cost: ["Grass", "Psychic", "Colorless"],

		effect: {
			en: "Discard 2 random Energy from this Pokémon."
		}
	}],

	retreat: 3
}

export default card
