import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-44",
	localId: 44,

	// Card informations
	name: {
		en: "Quagsire",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 195,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/44/high",
		},
	},

	evolveFrom: {
		en: "Wooper",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 416,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dense",
		},
		text: {
			en: "Any damage done to Quagsire by attacks from your opponent's Evolved Pokémon is reduced by 20 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mud Shot",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Hurl",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
