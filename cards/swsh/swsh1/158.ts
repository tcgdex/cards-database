import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/swsh/swsh1/158/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/158/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "inose yukie",



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
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
