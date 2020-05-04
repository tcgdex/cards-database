import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-177",
	localId: 177,

	// Card informations
	name: {
		en: "Jasmine",
		fr: "Jasmine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/177/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/177/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/177/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/177/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hideki Ishikawa",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez un Pokémon Metal dans votre deck, montrez-le, puis ajoutez-le à votre main. Si vous jouez en second et que c’est votre premier tour, cherchez 5 Pokémon Metal au lieu d’un. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
