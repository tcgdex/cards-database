import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-107",
	localId: 107,

	// Card informations
	name: {
		en: "Level Max",
		fr: "Niveau Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/107/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/107/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/107/high",
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
			fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck un Pokémon NIV.X qui change de niveau à partir d'1 de vos Pokémon et placez-le sur ce Pokémon. (Vous le faites ainsi passer au niveau supérieur.) Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
