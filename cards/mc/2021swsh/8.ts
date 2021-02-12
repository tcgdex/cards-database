import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/mc/2021swsh'

const card: Card = {

	// ids
	id: `2021swsh-8`,
	localId: 8,

	// Card informations
	name: {
		en: "Grookey",
		fr: "Ouistempo",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Branch Poke",
			fr: "Tapotige",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set,
}

export default card
