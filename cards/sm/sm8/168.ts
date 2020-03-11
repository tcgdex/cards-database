import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-168",
	localId: 168,

	// Card informations
	name: {
		en: "Aether Foundation Employee",
		fr: "Employés de la Fondation Æther",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/168/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/168/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/168/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/168/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "take",



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez 3 Pokémon avec « d’Alola » dans leur nom, de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
