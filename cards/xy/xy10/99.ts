import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-99",
	localId: 99,

	// Card informations
	name: {
		en: "Fairy Drop",
		fr: "Pastilles Féériques",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/99/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/99/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/99/high",
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
			fr: "Soignez 50 dégâts à l'un de vos Pokémon auquel de l'Énergie Fairy est attachée.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
