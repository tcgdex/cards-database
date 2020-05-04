import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-108",
	localId: 108,

	// Card informations
	name: {
		en: "Life Herb",
		fr: "Herbe sauveuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/108/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/108/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/108/high",
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
			fr: "Lancez une pièce. Si c'est face, choisissez 1 de vos Pokémon et retirez-lui tous ses États Spéciaux ainsi que 6 marqueurs de dégât (retirez-les lui tous s'il en a moins de 6).",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
