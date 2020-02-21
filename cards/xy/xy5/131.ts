import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-131",
	localId: 131,

	// Card informations
	name: {
		en: "Groudon Spirit Link",
		fr: "Lien Spirituel Groudon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/131/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/131/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/131/high",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient Primo-Groudon-EX.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
