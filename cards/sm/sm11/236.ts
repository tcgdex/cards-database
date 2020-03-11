import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-236",
	localId: 236,

	// Card informations
	name: {
		en: "Poké Maniac",
		fr: "Pokémaniac",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/236/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/236/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/236/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/236/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck jusqu’à 3 Pokémon avec un Coût de Retraite de 4, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
