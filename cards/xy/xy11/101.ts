import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-101",
	localId: 101,

	// Card informations
	name: {
		en: "Gardevoir Spirit Link",
		fr: "Lien Spirituel Gardevoir",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/101/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/101/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/101/high.png",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Gardevoir-EX.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

