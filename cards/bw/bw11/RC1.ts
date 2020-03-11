import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-RC1",
	localId: "RC1",

	// Card informations
	name: {
		en: "Snivy",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 495,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Growth",
		},
		text: {
			en: "Attach a Grass Energy card from your hand to this Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
