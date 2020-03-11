import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
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

	illustrator: "aky CG Works",

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
