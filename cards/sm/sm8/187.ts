import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm8/187/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/187/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/187/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/187/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez une carte Pokémon Grass de base ou une carte Énergie Grass dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
