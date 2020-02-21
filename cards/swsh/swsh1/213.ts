import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-213",
	localId: 213,

	// Card informations
	name: {
		en: "Air Balloon",
		fr: "Ballon",
	},







	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 63,
		name: "Yoshinobu Saito"
	},



	effect: {
		en: "The Retreat Cost of the Pokémon this card is attached to is ColorlessColorless less.",
		fr: "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de ColorlessColorless.",
	},







	rarity: Rarity.RareRainbow,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
