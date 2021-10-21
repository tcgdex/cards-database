import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Zacian LV.X"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	stage: "LEVEL-UP",

	abilities: [{
		type: "Poke-BODY",

		name: {
			en: "Bladed Armament"
		},

		effect: {
			en: "Damage from this Pokémon's attacks isn't affected by any effects on your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Brave Blade"
		},

		damage: 240,

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		}
	}]
}

export default card