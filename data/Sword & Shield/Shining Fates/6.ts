import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Brindibou"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Cirque Céleste"
		},

		effect: {
			fr: "Si vous avez joué Ornithologue de votre main pendant ce tour, ignorez toutes les Énergies dans les coûts d’attaques de ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Éclat Volant"
		},

		effect: {
			fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card