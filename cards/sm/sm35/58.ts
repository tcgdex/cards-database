import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-58",
	localId: 58,

	// Card informations
	name: {
		en: "Damage Mover",
		fr: "Déplace Dégâts",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/58/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/58/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez 3 marqueurs de dégâts de l’un de vos Pokémon vers un autre de vos Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
