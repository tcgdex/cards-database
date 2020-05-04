import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Wataru Kawahara",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez 4 cartes Énergie de base dans votre pile de défausse, montrez-les à votre adversaire et mélangez-les à votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
