import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Donphan"
	},

	illustrator: "Eri Yamaki",
	rarity: "None",
	category: "Pokemon",
	dexId: [232],
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Phanpy"
	},

	description: {
		en: "The longer and bigger its tusks, the higher its rank in its herd. The tusks take long to grow."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Earthquake"
		},

		effect: {
			en: "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 120
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Heavy Impact"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card