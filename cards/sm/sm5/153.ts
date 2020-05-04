import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-153",
	localId: 153,

	// Card informations
	name: {
		en: "Lusamine",
		fr: "Elsa-Mina",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/153/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/153/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/153/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/153/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "You Iribi",



	attacks: [{
		name: {},
		text: {
			fr: "Placez une combinaison de 2 cartes Supporter et cartes Stade de votre pile de défausse dans votre main.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
