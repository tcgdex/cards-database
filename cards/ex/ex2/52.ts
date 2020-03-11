import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-52",
	localId: 52,

	// Card informations
	name: {
		en: "Vigoroth",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 288,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/52/high",
		},
	},

	evolveFrom: {
		en: "Slakoth",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Focus Energy",
		},
		text: {
			en: "During your next turn, base damage of Vigoroth's slash attack is 90 instead of 40.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
