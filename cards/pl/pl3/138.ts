import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-138",
	localId: 138,

	// Card informations
	name: {
		en: "Night Teleporter",
		fr: "Télétransporteur nocturne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/138/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/138/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/138/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/138/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 84,
		name: "Ryota Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, placez toutes les cartes de votre main au-dessus de votre deck, puis choisissez 1 carte dans votre deck et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

