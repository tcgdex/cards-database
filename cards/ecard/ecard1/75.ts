import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-75",
	localId: 75,

	// Card informations
	name: {
		en: "Dragonair",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/75/high",
		},
	},

	evolveFrom: {
		en: "Dratini",
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
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Spiral Wave",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	}],







	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
