import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Garchomp  LV. X C"
	},

	illustrator: "Shizurow",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "LEVEL-UP",

	abilities: [{
		type: "Poke-POWER",

		name: {
			en: "Healing Breath"
		},

		effect: {
			en: "Once during your turn (before your attack), when you put Garchomp C LV.X from your hand onto your Active Garchomp C, you may remove all damage counters from each of your Pokémon SP."
		}
	}],

	attacks: [{
		name: {
			en: "Dragon Rush"
		},

		effect: {
			en: "Discard 2 Energy attached to Garchomp C. Choose 1 of your opponent’s Pokémon. This attack does 80 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) Garchomp C can’t use Dragon Rush during your next turn."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Colorless",
		value: "×2"
	}],

	retreat: 0
}

export default card