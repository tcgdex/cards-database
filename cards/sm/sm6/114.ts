import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-114",
	localId: 114,

	// Card informations
	name: {
		en: "Ultra Recon Squad",
		fr: "Ultra-Commando",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/114/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/114/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/114/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/114/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez jusqu’à 2 cartes Ultra-Chimère de votre main. Piochez 3 cartes pour chaque carte défaussée de cette façon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

