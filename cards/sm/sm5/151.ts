import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-151",
	localId: 151,

	// Card informations
	name: {
		en: "Lillie",
		fr: "Lilie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/151/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/151/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/151/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/151/high",
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
			fr: "Piochez des cartes jusqu’à ce que vous ayez 6 cartes en main. Si c’est votre premier tour, piochez des cartes jusqu’à ce que vous ayez 8 cartes en main.",
		},
	},{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu’une seule carte Supporter pendant votre tour (avant votre attaque).",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
