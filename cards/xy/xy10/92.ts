import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-92",
	localId: 92,

	// Card informations
	name: {
		en: "Audino Spirit Link",
		fr: "Lien Spirituel Nanméouïe",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/92/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/92/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/92/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Nanméouïe-EX.",
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

