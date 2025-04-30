import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Oricorio"
	},

	illustrator: "Jerky",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "This form of Oricorio has sipped pink nectar. It elevates its mind with the gentle steps of its dance, then unleashes its psychic energy."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dazzle Dance"
		},

		damage: 40,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card