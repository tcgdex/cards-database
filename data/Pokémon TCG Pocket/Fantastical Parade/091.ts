import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Passimian"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		en: "The boss chooses 10 members of the group to\ngo out hunting. The hunting party will evenly split\nthe food they find with the rest of the group."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fling"
		},

		cost: ["Fighting"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card