import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-202",
	localId: 202,

	// Card informations
	name: {
		en: "Misty's Favor",
		fr: "Faveur d’Ondine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/202/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/202/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/202/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/202/high",
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
			fr: "Cherchez jusqu’à 3 cartes Supporter dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
