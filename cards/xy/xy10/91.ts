import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-91",
	localId: 91,

	// Card informations
	name: {
		en: "Altaria Spirit Link",
		fr: "Lien Spirituel Altaria",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/91/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/91/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/91/high",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Altaria-EX.",
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
