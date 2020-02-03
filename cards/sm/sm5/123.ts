import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-123",
	localId: 123,

	// Card informations
	name: {
		en: "Fire Memory",
		fr: "ROM Feu",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/123/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/123/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/123/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/123/high.png",
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
			fr: "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Fire.",
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

