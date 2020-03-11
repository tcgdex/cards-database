import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-44",
	localId: 44,

	// Card informations
	name: {
		en: "Persian",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 53,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/44/high",
		},
	},

	evolveFrom: {
		en: "Meowth",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 133,
		type: AbilityType.POKEBODY,
		name: {
			en: "Thick Skin",
		},
		text: {
			en: "Persian can't be affected by any Special Conditions.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Poison Claws",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shining Claws",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
