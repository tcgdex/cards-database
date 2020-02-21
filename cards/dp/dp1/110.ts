import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-110",
	localId: 110,

	// Card informations
	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/110/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/110/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, choisissez 1 Pokémon dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
