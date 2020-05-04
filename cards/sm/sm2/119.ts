import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-119",
	localId: 119,

	// Card informations
	name: {
		en: "Aqua Patch",
		fr: "Fortifiant Aquatique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/119/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/119/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/119/high",
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
			fr: "Attachez une carte Énergie Water de votre pile de défausse à l’un de vos Pokémon Water de Banc.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
