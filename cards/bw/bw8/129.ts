import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-129",
	localId: 129,

	// Card informations
	name: {
		en: "Scramble Switch",
		fr: "Échange Combiné",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/129/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/129/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/129/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/129/high",
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
			fr: "Échangez votre Pokémon Actif avec 1 de vos Pokémon de Banc. Ensuite, vous pouvez déplacer autant d'Énergies attachées à l'ancien Pokémon Actif vers le nouveau Pokémon Actif que vous voulez.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
