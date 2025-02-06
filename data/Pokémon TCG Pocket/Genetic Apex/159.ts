import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kabutops"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage2",
	evolveFrom: {
		en: "Kabuto"
	},


	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Leech Life"
		},

		effect: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon."
		},

		damage: "50"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon.",
	}
}

export default card
