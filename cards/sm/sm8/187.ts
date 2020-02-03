import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-187",
	localId: 187,

	// Card informations
	name: {
		en: "Net Ball",
		fr: "Filet Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/187/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/187/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/187/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/187/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez une carte Pokémon Grass de base ou une carte Énergie Grass dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
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

