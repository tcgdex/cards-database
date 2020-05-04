import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-86",
	localId: 86,

	// Card informations
	name: {
		en: "Quick Ball",
		fr: "Rapide Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/86/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/86/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/86/high",
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
			fr: "Retournez des cartes de votre deck jusqu'à ce que vous retourniez un Pokémon. Montrez-le à votre adversaire et placez-le dans votre main. Mélangez les autres cartes à votre deck. (Si vous ne retournez pas de Pokémon, mélangez toutes les cartes retournées à votre deck.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
