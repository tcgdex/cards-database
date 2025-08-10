import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Wobbuffet"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		en: "It hates light and shock. If attacked, it inflates its\nbody to pump up its counterstrike."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Reply Strongly"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "If this Pokémon was damaged by an attack during your opponent's last turn while it was in the Active Spot, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card