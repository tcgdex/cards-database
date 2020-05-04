import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-94",
	localId: 94,

	// Card informations
	name: {
		en: "Moomoo Milk",
		fr: "Lait Meumeu",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/94/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/94/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Noriko Hotta",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’un de vos Pokémon. Lancez 2 pièces. Pour chaque face, retirez 3 marqueurs de dégâts de ce Pokémon.",
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
