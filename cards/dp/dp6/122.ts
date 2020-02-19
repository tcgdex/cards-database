import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-122",
	localId: 122,

	// Card informations
	name: {
		en: "Staryu",
		fr: "Stari",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 120,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/122/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/122/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/122/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/122/high.png",
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
			en: "Recover",
			fr: "Soin",
		},
		text: {
			en: "Discard an Energy attached to Staryu and remove 3 damage counters from Staryu.",
			fr: "Défaussez une Énergie attachée à Stari et retirez-lui 3 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque tournante",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

