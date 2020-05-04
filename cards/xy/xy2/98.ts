import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-98",
	localId: 98,

	// Card informations
	name: {
		en: "Trick Shovel",
		fr: "Pelle Rusée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/98/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/98/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "PLANETA",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez la carte du dessus du deck de l'un des joueurs. Vous pouvez défausser la carte regardée ou la remettre sur le dessus du deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
