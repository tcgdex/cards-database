import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp3/107/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/107/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/107/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/107/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

