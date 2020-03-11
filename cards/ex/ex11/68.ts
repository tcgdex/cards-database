import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-68",
	localId: 68,

	// Card informations
	name: {
		en: "Eevee δ",
	},

	hp: 50,

	type: [
		Type.METAL,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Metal Scoop",
		},
		text: {
			en: "Search your discard pile for a Metal Energy card and attach it to Eevee.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
