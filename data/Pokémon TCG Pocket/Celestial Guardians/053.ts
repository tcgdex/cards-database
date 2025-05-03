import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Araquanid"
	},

	illustrator: "kodama",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Dewpider"
	},

	description: {
		en: "It launches water bubbles with its legs, drowning prey within the bubbles. This Pokémon can then take its time to savor its meal."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dangerous Claws"
		},

		damage: "60+",
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card
