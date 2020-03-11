import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/swsh/swsh1/182/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/182/low",
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
