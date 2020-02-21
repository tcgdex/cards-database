import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-74",
	localId: 74,

	// Card informations
	name: {
		en: "Energy Returner",
		fr: "Récupérateur d'énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/74/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/74/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez 4 cartes Énergie de base dans votre pile de défausse, montrez-les à votre adversaire et mélangez-les à votre deck.",
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
