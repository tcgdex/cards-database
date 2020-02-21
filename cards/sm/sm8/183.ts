import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-183",
	localId: 183,

	// Card informations
	name: {
		en: "Mina",
		fr: "Oléa",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/183/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/183/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/183/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/183/high",
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
			fr: "Cherchez une carte Énergie Fairy dans votre deck et attachez-la à l’un de vos Pokémon. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
