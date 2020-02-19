import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-168",
	localId: 168,

	// Card informations
	name: {
		en: "Lum Berry",
		fr: "Baie Prine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/168/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/168/low.png",
		}
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
		en: "At the end of each turn, if the Pokémon this card is attached to is affected by any Special Conditions, it recovers from all of them, and discard this card.",
		fr: "À la fin de chaque tour, si le Pokémon auquel cette carte est attachée est affecté par au moins un État Spécial, il guérit de tous ces États Spéciaux. Ensuite, défaussez cette carte.",
	},







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
