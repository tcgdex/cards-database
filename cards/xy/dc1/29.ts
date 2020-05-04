import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-29",
	localId: 29,

	// Card informations
	name: {
		en: "Team Magma Admin",
		fr: "Admin Team Magma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/29/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/29/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/29/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "GAME FREAK inc.",



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez jusqu'à 3 Pokémon de la Team Magma de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
