import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/swsh/swsh1/156/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/156/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Yoshinobu Saito",



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
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
