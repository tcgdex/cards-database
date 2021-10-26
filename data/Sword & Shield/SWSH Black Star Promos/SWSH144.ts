import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Greninja Star"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",
	illustrator: "Masakazu Fukuda",

	abilities: [{
		type: "Poke-POWER",

		name: {
			en: "Shadow Knife"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put 1 damage counter on 1 of your opponent's Pokémon."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Mist Slash"
		},

		damage: 100,

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon."
		}
	}]
}

export default card