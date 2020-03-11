import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-178",
	localId: 178,

	// Card informations
	name: {
		en: "Professor's Research (Professor Magnolia)",
		fr: "Recherches Professorales (Professeure Magnolia)",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/178/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/178/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



	attacks: [{
		name: {},
		text: {
			en: "Discard your hand and draw 7 cards.",
			fr: "Défaussez votre main, puis piochez 7 cartes.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
