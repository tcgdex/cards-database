import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-129",
	localId: 129,

	// Card informations
	name: {
		en: "Scramble Switch",
		fr: "Échange Combiné",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/129/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/129/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/129/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/129/high.png",
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
			fr: "Échangez votre Pokémon Actif avec 1 de vos Pokémon de Banc. Ensuite, vous pouvez déplacer autant d'Énergies attachées à l'ancien Pokémon Actif vers le nouveau Pokémon Actif que vous voulez.",
		},
	}],







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card

