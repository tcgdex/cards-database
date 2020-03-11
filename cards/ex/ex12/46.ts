import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-46",
	localId: 46,

	// Card informations
	name: {
		en: "Vibrava",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 329,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/46/high",
		},
	},

	evolveFrom: {
		en: "Trapinch",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Supersonic",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bi-Blast",
		},
		text: {
			en: "If Vibrava has any React Energy cards attached to it, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
