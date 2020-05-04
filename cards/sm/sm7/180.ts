import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-180",
	localId: 180,

	// Card informations
	name: {
		en: "Life Herb",
		fr: "Herbe Sauveuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/180/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/180/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/180/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/180/high",
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
			fr: "Lancez une pièce. Si c’est face, soignez 60 dégâts et retirez tous les États Spéciaux de l’un de vos Pokémon.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
