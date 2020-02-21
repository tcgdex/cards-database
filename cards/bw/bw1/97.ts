import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-97",
	localId: 97,

	// Card informations
	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/97/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/97/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: {
		id: 93,
		name: "Yuri Umemura"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
