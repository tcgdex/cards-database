import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-87",
	localId: 87,

	// Card informations
	name: {
		en: "Metapod",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 11,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/87/high",
		},
	},

	evolveFrom: {
		en: "Caterpie",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 128,
		name: "Yuichi Sawayama"
	},

	abilities: [{
		id: 276,
		type: AbilityType.POKEBODY,
		name: {
			en: "Exoskeleton",
		},
		text: {
			en: "All damage done to Metapod is reduced by 20 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
