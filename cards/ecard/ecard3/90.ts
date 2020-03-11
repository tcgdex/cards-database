import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-90",
	localId: 90,

	// Card informations
	name: {
		en: "Rattata",
	},

	hp: 30,

	type: [
		Type.COLORLESS,
	],

	dexId: 19,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masako Yamashita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Friends",
		},
		text: {
			en: "Search your deck for a Baby Pokémon or Basic Pokémon and put it onto your bench. Shuffle your deck afterward. (You can't use this attack it your bench is full.)",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
