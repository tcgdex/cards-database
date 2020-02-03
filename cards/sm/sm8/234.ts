import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-234",
	localId: 234,

	// Card informations
	name: {
		en: "Net Ball",
		fr: "Filet Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/234/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/234/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/234/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/234/high.png",
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







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

