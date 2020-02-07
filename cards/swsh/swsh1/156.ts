import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-156",
	localId: 156,

	// Card informations
	name: {
		en: "Air Balloon",
		fr: "Ballon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/156/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/156/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/156/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/156/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 63,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			en: "The Retreat Cost of the Pokémon this card is attached to is ColorlessColorless less.",
			fr: "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de ColorlessColorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

