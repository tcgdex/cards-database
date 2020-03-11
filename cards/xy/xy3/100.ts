import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-100",
	localId: 100,

	// Card informations
	name: {
		en: "Super Scoop Up",
		fr: "Super Rappel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/100/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/100/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, placez l’un de vos Pokémon ainsi que toutes les cartes qui lui sont attachées dans votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
