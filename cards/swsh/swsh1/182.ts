import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-182",
	localId: 182,

	// Card informations
	name: {
		en: "Sitrus Berry",
		fr: "Baie Sitrus",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/182/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/182/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/182/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/182/high.png",
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
			en: "At the end of each turn, if the Pokémon this card is attached to has 3 or more damage counters on it, heal 30 damage from it and discard this card.",
			fr: "À la fin de chaque tour, si le Pokémon auquel cette carte est attachée a au moins 3 marqueurs de dégâts, soignez 30 de ses dégâts, puis défaussez cette carte.",
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
