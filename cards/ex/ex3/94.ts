import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-94",
	localId: 94,

	// Card informations
	name: {
		en: "Latios ex",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Stream",
		},
		text: {
			en: "Flip a coin. If heads, search your discard pile for a basic Energy card and attach it to Latios ex.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Luster Purge",
		},
		text: {
			en: "Discard 3 Energy attached to Latios ex.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
