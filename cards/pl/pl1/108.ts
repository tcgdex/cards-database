import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-108",
	localId: 108,

	// Card informations
	name: {
		en: "Life Herb",
		fr: "Herbe sauveuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/108/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/108/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/108/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, choisissez 1 de vos Pokémon et retirez-lui tous ses États Spéciaux ainsi que 6 marqueurs de dégât (retirez-les lui tous s'il en a moins de 6).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

