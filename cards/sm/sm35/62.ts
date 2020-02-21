import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-62",
	localId: 62,

	// Card informations
	name: {
		en: "Lillie",
		fr: "Lilie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/62/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/62/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez des cartes jusqu’à ce que vous ayez 6 cartes en main. Si c’est votre premier tour, piochez des cartes jusqu'à ce que vous ayez 8 cartes en main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
