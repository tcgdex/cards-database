import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-32",
	localId: 32,

	// Card informations
	name: {
		en: "Team Magma's Secret Base",
		fr: "Base Secrète de la Team Magma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/32/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/32/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque fois qu'un joueur place un Pokémon de base (à part les Pokémon de la Team Magma) de sa main sur son Banc, placez 2 marqueurs de dégâts sur ce Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
