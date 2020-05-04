import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-107",
	localId: 107,

	// Card informations
	name: {
		en: "Shellos West Sea",
		fr: "Sancoki Mer Occident",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 422,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/107/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/107/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mud Spatter",
			fr: "Éclaboussure de boue",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Recover",
			fr: "Soin",
		},
		text: {
			en: "Discard a Water Energy attached to Shellos West Sea and remove all damage counters from Shellos West Sea.",
			fr: "Défaussez une Énergie Water attachée à Sancoki Mer Occident et retirez-lui tous ses marqueurs de dégât.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
