import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-157",
	localId: 157,

	// Card informations
	name: {
		en: "Water Memory",
		fr: "ROM Eau",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/157/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/157/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/157/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/157/high",
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
			fr: "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Water.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
