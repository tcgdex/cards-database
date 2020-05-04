import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-121",
	localId: 121,

	// Card informations
	name: {
		en: "Po Town",
		fr: "Kokohio",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/121/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/121/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/121/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque fois qu’un joueur joue un Pokémon de sa main pour faire évoluer l’un de ses Pokémon, placez 3 marqueurs de dégâts sur ce Pokémon.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
