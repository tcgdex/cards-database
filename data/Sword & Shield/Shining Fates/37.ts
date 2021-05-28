import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Morpeko V",
		en: "Morpeko V"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Étincelle",
			en: "Spark"
		},

		effect: {
			fr: "Cette attaque inflige aussi 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack also does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Électro Roue",
			en: "Electro Wheel"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, échangez-le contre l’un de vos Pokémon de Banc.",
			en: "Discard an Energy from this Pokémon. If you do, switch it with 1 of your Benched Pokémon."
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card