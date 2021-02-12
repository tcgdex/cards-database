import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/mc/2021swsh'
const card: Card = {

	// ids
	id: "2011swsh-10",
	localId: 10,

	// Card informations
	name: {
		en: "Cyndaquil",
		fr: "Héricendre",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 155,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/40/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/40/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: set
}

export default card
