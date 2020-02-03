import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-192",
	localId: 192,

	// Card informations
	name: {
		en: "Wait and See Hammer",
		fr: "Marteau Attends-Voir",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/192/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/192/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/192/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/192/high.png",
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







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

