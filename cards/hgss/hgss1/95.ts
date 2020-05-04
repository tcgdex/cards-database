import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-95",
	localId: 95,

	// Card informations
	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/95/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/95/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Hideaki Hakozaki",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, cherchez un Pokémon dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
