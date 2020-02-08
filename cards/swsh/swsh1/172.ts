import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-172",
	localId: 172,

	// Card informations
	name: {
		en: "Pal Pad",
		fr: "Registre Ami",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/172/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/172/low.png",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 65,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			en: "Shuffle up to 2 Supporter cards from your discard pile into your deck.",
			fr: "Mélangez avec votre deck jusqu’à 2 cartes Supporter de votre pile de défausse.",
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
