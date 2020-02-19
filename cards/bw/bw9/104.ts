import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-104",
	localId: 104,

	// Card informations
	name: {
		en: "Team Plasma Badge",
		fr: "Badge de la Team Plasma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/104/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/104/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/104/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/104/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon auquel cette carte est attachée est un Pokémon de la Team Plasma.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

