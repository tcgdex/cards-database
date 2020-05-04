import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-91",
	localId: 91,

	// Card informations
	name: {
		en: "Energy Switch",
		fr: "Échange d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/91/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/91/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/91/high",
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
			fr: "Prenez une carte Énergie de base attachée à l’un de vos Pokémon et attachez-la à un autre de vos Pokémon.",
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
