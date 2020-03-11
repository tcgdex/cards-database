import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-181",
	localId: 181,

	// Card informations
	name: {
		en: "Rotom Bike",
		fr: "Moticyclette",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/181/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/181/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			en: "Draw cards until you have 6 cards in your hand. Your turn ends.",
			fr: "Piochez des cartes jusqu’à en avoir 6 en main. Votre tour se termine.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
