import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-59",
	localId: 59,

	// Card informations
	name: {
		en: "Beldum δ",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 374,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 860,
		type: AbilityType.POKEBODY,
		name: {
			en: "Conductive Body",
		},
		text: {
			en: "You pay Colorless to retreat Beldum for each Beldum on your Bench.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
		},
		text: {
			en: "Beldum does 10 damage to itself.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
