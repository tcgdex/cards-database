import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-93",
	localId: 93,

	// Card informations
	name: {
		en: "Full Heal",
		fr: "Énergie guérisseuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/93/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/93/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Takashi Yamaguchi",



	attacks: [{
		name: {},
		text: {
			fr: "Retirez tous les États spéciaux de votre Pokémon actif.",
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
