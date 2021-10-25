import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Empoleon V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "None",
	category: "Pokemon",
	dexId: [395],
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Emperor's Eyes"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent's Basic Pokémon in play have no Abilities, except for Pokémon with a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes)."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Swirling Slice"
		},

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon."
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card