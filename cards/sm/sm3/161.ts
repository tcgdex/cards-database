import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-161",
	localId: 161,

	// Card informations
	name: {
		en: "Bodybuilding Dumbbells",
		fr: "Haltères de Culturisme",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/161/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/161/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/161/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/161/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte ajoute 40 PV au Pokémon de Niveau 1 auquel elle est attachée.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
