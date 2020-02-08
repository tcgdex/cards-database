import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'
import path from 'path'
import set from '../../../sets/swsh/swshp'

const localId = path.basename(__filename).split(".")[0]

const card: Card = {

	// ids
	id: `swshp-${localId}`,
	localId: localId,

	// Card informations
	name: {
		fr: "Miaouss V",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],

	tags: [
		Tag.BASIC,
		Tag.V,
	],

	evolveTo: [{
		fr: "Miaouss VMAX"
	}],

	illustrator: {
		id: 149,
		name: "aky CG Works"
	},

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Jackpot",
		},
		text: {
			fr: "Piocher une carte."
		},
		damage: 30
	}, {
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
		],
		name: {
			fr: "Griffe Taillante",
		},
		damage: 130,
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set,
}

export default card
