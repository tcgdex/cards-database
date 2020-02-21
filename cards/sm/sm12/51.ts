import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-51",
	localId: 51,

	// Card informations
	name: {
		en: "Sealeo",
		fr: "Phogleur",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 364,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/51/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/51/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/51/high",
		},
	},

	evolveFrom: {
		en: "Spheal",
		fr: "Obalie",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 146,
		name: "miki kudo"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Ball",
			fr: "Ball’Glace",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
