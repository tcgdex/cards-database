import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Tutétékri de Galar"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Tutafeh de Galar"
	},

	attacks: [{
		name: {
			fr: "Mépris Réparti"
		},

		effect: {
			fr: "Pour chaque marqueur de dégâts sur ce Tutétékri de Galar, placez 2 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Marteau en Folie"
		},

		effect: {
			fr: "Ce Pokémon s’inflige aussi 30 dégâts."
		},

		damage: 120,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card