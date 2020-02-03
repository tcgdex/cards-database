import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-72",
	localId: 72,

	// Card informations
	name: {
		en: "Dual Ball",
		fr: "Double boule",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/72/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/72/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/72/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/72/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 68,
		name: "Takashi Yamaguchi"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez 2 pièces. Pour chaque côté face, cherchez un Pokémon de base dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Dans ce cas, mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

