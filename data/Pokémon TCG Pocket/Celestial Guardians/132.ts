import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Hawlucha"
	},

	illustrator: "miki kudo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "Its elegant finishing moves—performed by nimbly leaping around using its wings—are polished in the forest where it was born and raised."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Justified Press"
		},

		damage: "20+",
		cost: ["Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is a Darkness Pokémon, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
