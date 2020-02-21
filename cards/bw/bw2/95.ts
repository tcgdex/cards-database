import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-95",
	localId: 95,

	// Card informations
	name: {
		en: "Pokémon Catcher",
		fr: "Attrape-Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/95/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/95/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/95/high",
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
			fr: "Échangez le Pokémon Actif de votre adversaire avec 1 de ses Pokémon de Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
