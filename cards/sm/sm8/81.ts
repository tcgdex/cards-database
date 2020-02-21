import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-81",
	localId: 81,

	// Card informations
	name: {
		en: "Blitzle",
		fr: "Zébibron",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 522,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/81/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/81/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Flop",
			fr: "Flop",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
