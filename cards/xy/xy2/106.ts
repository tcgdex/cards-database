import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-106",
	localId: 106,

	// Card informations
	name: {
		en: "Pokémon Fan Club",
		fr: "Fan Club Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/106/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/106/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Emi Ando",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu'à 2 Pokémon de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
