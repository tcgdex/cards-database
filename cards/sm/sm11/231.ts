import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-231",
	localId: 231,

	// Card informations
	name: {
		en: "Blue's Tactics",
		fr: "Tactiques de Blue",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/231/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/231/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/231/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/231/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "À la fin de ce tour, piochez des cartes jusqu’à ce que vous ayez 8 cartes en main.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
