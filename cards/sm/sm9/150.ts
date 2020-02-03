import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-150",
	localId: 150,

	// Card informations
	name: {
		en: "Nanu",
		fr: "Danh",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/150/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/150/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/150/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/150/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez un Pokémon Darkness de base dans votre pile de défausse. Échangez-le avec l’un de vos Pokémon en jeu. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu et tous les autres effets restent sur le nouveau Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

