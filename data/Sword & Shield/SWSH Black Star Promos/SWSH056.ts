import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Morpeko V",
		fr: "Morpeko V"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Spark",
			fr: "Étincelle"
		},

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Electro Wheel",
			fr: "Électro Roue"
		},

		effect: {
			en: "Discard an Energy from this Pokémon. If you do, switch it with 1 of your Benched Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, échangez-le contre l’un de vos Pokémon de Banc."
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