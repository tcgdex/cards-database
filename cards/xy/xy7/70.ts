import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-70",
	localId: 70,

	// Card informations
	name: {
		en: "Ampharos Spirit Link",
		fr: "Lien Spirituel Pharamp",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/70/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/70/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/70/high.png",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Pharamp-EX.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

