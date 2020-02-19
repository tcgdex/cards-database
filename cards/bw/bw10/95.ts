import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-95",
	localId: 95,

	// Card informations
	name: {
		en: "Scoop Up Cyclone",
		fr: "Rappel Cyclone",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/95/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/95/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/95/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Placez 1 de vos Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		},
	}],







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

