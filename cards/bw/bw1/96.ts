import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-96",
	localId: 96,

	// Card informations
	name: {
		en: "PlusPower",
		fr: "PlusPower",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/96/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/96/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Pendant ce tour, les attaques de votre Pokémon infligent 10 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
