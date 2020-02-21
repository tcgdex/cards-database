import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-83",
	localId: 83,

	// Card informations
	name: {
		en: "Gallade Spirit Link",
		fr: "Lien Spirituel Gallame",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/83/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/83/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/83/high",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Gallame-EX.",
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
