import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-138",
	localId: 138,

	// Card informations
	name: {
		en: "Night Teleporter",
		fr: "Télétransporteur nocturne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/138/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/138/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/138/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryota Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, placez toutes les cartes de votre main au-dessus de votre deck, puis choisissez 1 carte dans votre deck et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
