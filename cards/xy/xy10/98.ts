import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-98",
	localId: 98,

	// Card informations
	name: {
		en: "Energy Reset",
		fr: "Réinitialisation d'Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/98/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/98/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/98/high",
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
			fr: "Placez dans votre main autant d'Énergies attachées à votre Pokémon que vous voulez.",
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
