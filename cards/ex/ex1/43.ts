import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-43",
	localId: 43,

	// Card informations
	name: {
		en: "Silcoon",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 266,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/43/high",
		},
	},

	evolveFrom: {
		en: "Wurmple",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 795,
		type: AbilityType.POKEBODY,
		name: {
			en: "Hard Cocoon",
		},
		text: {
			en: "During your opponent's turn, if Silcoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Gooey Thread",
		},
		text: {
			en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
		},
		damage: 10
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
