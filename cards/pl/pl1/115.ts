import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-115",
	localId: 115,

	// Card informations
	name: {
		en: "Pokémon Rescue",
		fr: "Rescousse Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/115/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/115/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/115/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/115/high.png",
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
			fr: "Choisissez un Pokémon dans votre pile de défausse, montrez-le à votre adversaire et placez-le dans votre main.",
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

