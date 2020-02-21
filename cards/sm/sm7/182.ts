import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-182",
	localId: 182,

	// Card informations
	name: {
		en: "Rainbow Brush",
		fr: "Pinceau Arc-en-Ciel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/182/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/182/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/182/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/182/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une carte Énergie attachée à l’un de vos Pokémon. Cherchez une carte Énergie de base dans votre deck et échangez-la avec cette carte. Mélangez la première carte Énergie avec votre deck.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
