import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Kyogre"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Déferlante Magnifique"
		},

		effect: {
			fr: "Cette attaque inflige 80 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		cost: ["Water", "Lightning", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card