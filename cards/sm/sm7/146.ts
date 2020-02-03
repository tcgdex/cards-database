import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-146",
	localId: 146,

	// Card informations
	name: {
		en: "Super Scoop Up",
		fr: "Super Rappel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/146/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/146/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/146/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/146/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, placez l’un de vos Pokémon ainsi que toutes les cartes qui lui sont attachées dans votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

