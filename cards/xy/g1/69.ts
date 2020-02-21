import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-69",
	localId: 69,

	// Card informations
	name: {
		en: "Pokémon Fan Club",
		fr: "Fan Club Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/69/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/69/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 86,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu'à 2 Pokémon de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
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
