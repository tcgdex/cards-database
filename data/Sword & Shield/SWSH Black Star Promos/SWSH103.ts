import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Blastoise VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],

	evolveFrom: {
		en: "Blastoise V"
	},

	attacks: [{
		name: {
			en: "Grand Falls"
		},

		effect: {
			en: "Search your deck for up to 3 Water Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck."
		},

		damage: 120,
		cost: ["Water", "Water", "Water"]
	}, {
		name: {
			en: "G-Max Bombard"
		},

		effect: {
			en: "This attack also does 30 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 220,
		cost: ["Water", "Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card