import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-103",
	localId: 103,

	// Card informations
	name: {
		en: "Ninja Boy",
		fr: "Ninja Amateur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/103/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/103/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/103/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/103/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’un de vos Pokémon de base en jeu. Cherchez un Pokémon de base dans votre deck et échangez-le avec le Pokémon choisi. (Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon.) Mélangez le premier Pokémon avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

