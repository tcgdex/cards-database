import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-87",
	localId: 87,

	// Card informations
	name: {
		en: "Fraxure",
		fr: "Incisache",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 611,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/87/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/87/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/87/high.png",
		},
	},

	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dual Chop",
			fr: "Double Baffe",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],





	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card

