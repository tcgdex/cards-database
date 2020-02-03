import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-107",
	localId: 107,

	// Card informations
	name: {
		en: "Level Max",
		fr: "Niveau Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/107/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/107/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/107/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/107/high.png",
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
			fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck un Pokémon NIV.X qui change de niveau à partir d'1 de vos Pokémon et placez-le sur ce Pokémon. (Vous le faites ainsi passer au niveau supérieur.) Ensuite, mélangez votre deck.",
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

