import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-185",
	localId: 185,

	// Card informations
	name: {
		en: "Moomoo Milk",
		fr: "Lait Meumeu",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/185/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/185/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/185/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/185/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’un de vos Pokémon, puis lancez 2 pièces. Pour chaque côté face, soignez 30 dégâts à ce Pokémon-là.",
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
