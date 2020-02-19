import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy2/98/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/98/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/98/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez la carte du dessus du deck de l'un des joueurs. Vous pouvez défausser la carte regardée ou la remettre sur le dessus du deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card

