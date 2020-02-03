import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-236",
	localId: 236,

	// Card informations
	name: {
		en: "Wait and See Hammer",
		fr: "Marteau Attends-Voir",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/236/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/236/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/236/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/236/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez utiliser cette carte que si vous jouez en second et uniquement pendant votre premier tour. \n\nDéfaussez une Énergie de l’un des Pokémon de votre adversaire.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

