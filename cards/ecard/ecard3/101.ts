import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-101",
	localId: 101,

	// Card informations
	name: {
		en: "Snubbull",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 209,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hisao Nakamura",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scary Face",
		},
		text: {
			en: "Flip a coin. If heads, until the end of your opponent's next turn the Defending Pokémon can't Retreat.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
		},
		damage: 20
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
