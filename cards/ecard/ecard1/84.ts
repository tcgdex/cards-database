import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-84",
	localId: 84,

	// Card informations
	name: {
		en: "Kadabra",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 64,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/84/high",
		},
	},

	evolveFrom: {
		en: "Abra",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Recall",
		},
		text: {
			en: "Attach 2 basic Energy cards from your discard pile to Kadabra (1 if you have only 1).",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Confuse Ray",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
