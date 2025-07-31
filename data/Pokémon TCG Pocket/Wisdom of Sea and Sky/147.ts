import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Stantler"
	},

	illustrator: "sui",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "This Pokémon apparently used to live in much\nharsher environments, and thus it once had\nstronger psychic powers than it does now."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Enhanced Horns"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card