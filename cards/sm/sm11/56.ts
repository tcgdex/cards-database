import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-56",
	localId: 56,

	// Card informations
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/56/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/56/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
		},
		damage: 50
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
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
