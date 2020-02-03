import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-113",
	localId: 113,

	// Card informations
	name: {
		en: "Mysterious Treasure",
		fr: "Trésor Mystérieux",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/113/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/113/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/113/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/113/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez une carte de votre main. Dans ce cas, cherchez un Pokémon Psychic ou Dragon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
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

