import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-85",
	localId: 85,

	// Card informations
	name: {
		en: "Latios Spirit Link",
		fr: "Lien Spirituel Latios",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/85/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/85/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/85/high.png",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Latios-EX.",
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

