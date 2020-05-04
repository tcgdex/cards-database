import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-66",
	localId: 66,

	// Card informations
	name: {
		en: "Super Scoop Up",
		fr: "Super Rappel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/66/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/66/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, placez l’un de vos Pokémon ainsi que toutes les cartes qui lui sont attachées dans votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
