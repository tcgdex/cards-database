import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-146",
	localId: 146,

	// Card informations
	name: {
		en: "Professor's Letter",
		fr: "Lettre du Professeur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/146/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/146/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/146/high",
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
			fr: "Cherchez jusqu'à 2 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
