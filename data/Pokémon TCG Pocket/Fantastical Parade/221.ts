import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Kabutops"
	},

	illustrator: "Krgc",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Kabuto"
	},

	description: {
		en: "Kabutops slices its prey apart and sucks out\nthe fluids. The discarded body parts become\nfood for other Pokémon."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Leech Life"
		},

		damage: 50,
		cost: ["Fighting"],

		effect: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card