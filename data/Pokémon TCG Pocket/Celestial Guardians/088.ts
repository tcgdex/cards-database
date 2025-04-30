import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Necrozma"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		en: "It looks somehow pained as it rages around in search of light, which serves as its energy. It's apparently from another world."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Prismatic Laser"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card