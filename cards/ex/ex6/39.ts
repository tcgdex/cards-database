import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-39",
	localId: 39,

	// Card informations
	name: {
		en: "Metapod",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 11,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/39/high",
		},
	},

	evolveFrom: {
		en: "Caterpie",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 577,
		type: AbilityType.POKEBODY,
		name: {
			en: "Energy Protection",
		},
		text: {
			en: "Any damage done to Metapod by attacks is reduced by 10 for each Energy card attached to Metapod. You can't reduce more than 30 damage in this way.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharpen",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
