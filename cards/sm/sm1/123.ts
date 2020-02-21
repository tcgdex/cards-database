import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-123",
	localId: 123,

	// Card informations
	name: {
		en: "Nest Ball",
		fr: "Faiblo Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/123/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/123/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez un Pokémon de base dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
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
