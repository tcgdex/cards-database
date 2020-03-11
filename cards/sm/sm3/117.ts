import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-117",
	localId: 117,

	// Card informations
	name: {
		en: "Lana",
		fr: "Néphie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/117/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/117/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/117/high",
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
			fr: "Soignez 50 dégâts à chacun de vos Pokémon auquel de l’Énergie Water est attachée.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
