import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-167",
	localId: 167,

	// Card informations
	name: {
		en: "Lucky Egg",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/167/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/167/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],





	attacks: [{
		name: {},
		text: {
			en: "If the Pokémon this card is attached to is Knocked Out by damage from an opponent’s attack, draw cards until you have 7 cards in your hand.",
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

