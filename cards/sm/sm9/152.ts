import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-152",
	localId: 152,

	// Card informations
	name: {
		en: "Pokémon Communication",
		fr: "Communication Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/152/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/152/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/152/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/152/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Montrez un Pokémon de votre main, puis placez-le dans votre deck. Dans ce cas, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
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
