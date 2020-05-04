import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-49",
	localId: 49,

	// Card informations
	name: {
		en: "Metang δ",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 375,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/49/high",
		},
	},

	evolveFrom: {
		en: "Beldum",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Claws",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnetic Blast",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
