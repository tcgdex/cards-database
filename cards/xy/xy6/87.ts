import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-87",
	localId: 87,

	// Card informations
	name: {
		en: "Rayquaza Spirit Link",
		fr: "Lien Spirituel Rayquaza",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/87/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/87/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/87/high.png",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Rayquaza-EX.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

