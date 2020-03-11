import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-133",
	localId: 133,

	// Card informations
	name: {
		en: "Tauros",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 128,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/133/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/133/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuichi Sawayama",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Hazard",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
		},
		text: {
			en: "Tauros does 20 Damage to itself.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
