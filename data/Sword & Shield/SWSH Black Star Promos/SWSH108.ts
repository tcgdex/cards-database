import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Empoleon V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Common",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Emperor’s Eyes"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent’s Basic Pokémon in play have no Abilities, except for Pokémon with a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes)."
		}
	}],

	attacks: [{
		name: {
			en: "Swirling Slice"
		},

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon."
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card