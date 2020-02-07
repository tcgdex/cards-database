import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-158",
	localId: 158,

	// Card informations
	name: {
		en: "Big Charm",
		fr: "Grande Amulette",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/158/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/158/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/158/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/158/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 67,
		name: "inose yukie"
	},



	attacks: [{
		name: {},
		text: {
			en: "The Pokémon this card is attached to gets +30 HP.",
			fr: "Cette carte ajoute 30 PV au Pokémon auquel elle est attachée.",
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

