import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-59",
	localId: 59,

	// Card informations
	name: {
		en: "Clemont",
		fr: "Lem",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/59/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/59/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/59/high",
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
			fr: "Cherchez jusqu'à 4 cartes Énergie Lightning dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
