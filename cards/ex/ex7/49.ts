import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-49",
	localId: 49,

	// Card informations
	name: {
		en: "Skiploom",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 188,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/49/high",
		},
	},

	evolveFrom: {
		en: "Hoppip",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",

	abilities: [{
		id: 298,
		type: AbilityType.POKEBODY,
		name: {
			en: "Buffer",
		},
		text: {
			en: "If Skiploom would be Knocked Out by an opponent's attack, flip a coin. If heads, Skiploom is not Knocked Out and its remaining HP becomes 10 instead.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Miracle Powder",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
