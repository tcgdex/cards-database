import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-119",
	localId: 119,

	// Card informations
	name: {
		en: "Olivia",
		fr: "Alyxia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/119/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/119/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/119/high",
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
			fr: "Cherchez jusqu’à 2 Pokémon-GX dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
