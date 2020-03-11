import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-172",
	localId: 172,

	// Card informations
	name: {
		en: "Pal Pad",
		fr: "Registre Ami",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/172/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/172/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			en: "Shuffle up to 2 Supporter cards from your discard pile into your deck.",
			fr: "Mélangez avec votre deck jusqu’à 2 cartes Supporter de votre pile de défausse.",
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
