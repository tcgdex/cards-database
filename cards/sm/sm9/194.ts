import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-194",
	localId: 194,

	// Card informations
	name: {
		en: "Judge Whistle",
		fr: "Sifflet de Juge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/194/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/194/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/194/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/194/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’une de ces options :\n\n• Piochez une carte.\n• Placez une carte Juge de votre pile de défausse dans votre main.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
