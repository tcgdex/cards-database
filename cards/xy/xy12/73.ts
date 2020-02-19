import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-73",
	localId: 73,

	// Card informations
	name: {
		en: "Blastoise Spirit Link",
		fr: "Lien Spirituel Tortank",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/73/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/73/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/73/high.png",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Tortank-EX.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card

