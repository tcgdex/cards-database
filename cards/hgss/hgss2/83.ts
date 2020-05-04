import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-83",
	localId: 83,

	// Card informations
	name: {
		en: "Super Scoop Up",
		fr: "Super rappel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/83/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/83/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Wataru Kawahara",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, reprenez dans votre main l'un de vos Pokémon ainsi que toutes les cartes qui lui sont attachées.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
