import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-173",
	localId: 173,

	// Card informations
	name: {
		en: "Faba",
		fr: "Saubohne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/173/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/173/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/173/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/173/high",
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
			fr: "Choisissez une carte Outil Pokémon ou une carte Énergie spéciale attachée à l’un des Pokémon de votre adversaire, ou une carte Stade en jeu, et placez-la dans la Zone Perdue.",
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
