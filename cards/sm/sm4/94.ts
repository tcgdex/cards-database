import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-94",
	localId: 94,

	// Card informations
	name: {
		en: "Fighting Memory",
		fr: "ROM Combat",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/94/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/94/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/94/high",
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
			fr: "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Fighting.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
