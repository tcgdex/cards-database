import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-159",
	localId: 159,

	// Card informations
	name: {
		en: "Rotom Dex",
		fr: "Motisma-Dex",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/159/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/159/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/159/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/159/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Après avoir compté vos cartes Récompense, mélangez-les dans votre deck. Prenez alors le même nombre de cartes du dessus de votre deck et placez-les faces cachées comme cartes Récompense.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
