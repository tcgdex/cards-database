import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Donphan",
		fr: "Donphan"
	},

	illustrator: "Eri Yamaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy"
	},

	attacks: [{
		name: {
			en: "Earthquake",
			fr: "Séisme"
		},

		effect: {
			en: "This attack also does 20 damage to each of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 120,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card