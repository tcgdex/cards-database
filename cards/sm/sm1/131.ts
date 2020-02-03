import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-131",
	localId: 131,

	// Card informations
	name: {
		en: "Rotom Dex",
		fr: "Motisma-Dex",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/131/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/131/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/131/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/131/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Après avoir compté vos cartes Récompense, mélangez-les dans votre deck. Prenez alors le même nombre de cartes du dessus de votre deck et placez-les faces cachées comme cartes Récompense.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

