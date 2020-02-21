import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-121",
	localId: 121,

	// Card informations
	name: {
		en: "Electric Memory",
		fr: "ROM Électrik",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/121/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/121/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/121/high",
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
			fr: "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Lightning.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
