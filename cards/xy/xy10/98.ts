import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy10/98/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/98/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/98/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



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

