import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-102",
	localId: 102,

	// Card informations
	name: {
		en: "Revive",
		fr: "Rappel",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/102/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/102/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/102/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/102/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Prenez un Pokémon de base dans votre pile de défausse et placez-le sur votre Banc.",
		},
	},{
		name: {},
		text: {
			fr: "Vous pouvez jouer autant de cartes Objet que vous le voulez pendant votre tour (avant votre attaque).",
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

