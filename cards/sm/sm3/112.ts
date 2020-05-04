import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-112",
	localId: 112,

	// Card informations
	name: {
		en: "Acerola",
		fr: "Margie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/112/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/112/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Placez l’un de vos Pokémon avec des marqueurs de dégâts et toutes les cartes qui lui sont attachées dans votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
