import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Métamorph V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Transformation-V"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez choisir un Pokémon-V de base dans votre pile de défausse et l’échanger contre ce Pokémon. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Collage"
		},

		effect: {
			fr: "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card