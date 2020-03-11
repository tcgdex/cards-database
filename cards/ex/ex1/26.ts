import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-26",
	localId: 26,

	// Card informations
	name: {
		en: "Cascoon",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 268,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/26/high",
		},
	},

	evolveFrom: {
		en: "Wurmple",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 795,
		type: AbilityType.POKEBODY,
		name: {
			en: "Hard Cocoon",
		},
		text: {
			en: "During your opponent's turn, if Cascoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Thread",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
