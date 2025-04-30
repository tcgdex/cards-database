import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Lele"
	},

	illustrator: "OKACHEKE",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		en: "It heals the wounds of people and Pokémon by sprinkling them with its sparkling scales. This guardian deity is worshiped on Akala."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Energy Arrow"
		},

		cost: ["Psychic"],

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon for each Energy attached to that Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card