import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-96",
	localId: 96,

	// Card informations
	name: {
		en: "All-Night Party",
		fr: "Célébration Nocturne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/96/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/96/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, si le Pokémon Actif de ce joueur est Endormi, il peut retirer cet État Spécial et soigner 30 dégâts au Pokémon.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
