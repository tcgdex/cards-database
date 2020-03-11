import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-161",
	localId: 161,

	// Card informations
	name: {
		en: "Energy Search",
		fr: "Recherche d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/161/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/161/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Studio Bora Inc.",



	attacks: [{
		name: {},
		text: {
			en: "Search your deck for a basic Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie de base, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
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
