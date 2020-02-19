import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-86",
	localId: 86,

	// Card informations
	name: {
		en: "Axew",
		fr: "Coupenotte",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 610,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/86/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/86/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dual Chop",
			fr: "Double Baffe",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],





	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card

