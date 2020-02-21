import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-85",
	localId: 85,

	// Card informations
	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/85/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/85/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/85/high",
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
			fr: "Lancez une pièce. Si c'est face, choisissez un Pokémon dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
