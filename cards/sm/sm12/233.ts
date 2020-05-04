import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-233",
	localId: 233,

	// Card informations
	name: {
		en: "Professor Oak's Setup",
		fr: "Installation du Professeur Chen",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/233/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/233/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/233/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/233/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Nabana Kensaku",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 3 Pokémon de base de types différents dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
