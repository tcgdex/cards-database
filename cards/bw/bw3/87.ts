import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw3/87/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/87/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/87/high",
		},
	},

	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



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

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
