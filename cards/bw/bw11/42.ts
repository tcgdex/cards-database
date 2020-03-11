import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-42",
	localId: 42,

	// Card informations
	name: {
		en: "Seismitoad",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 537,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/42/high",
		},
	},

	evolveFrom: {
		en: "Palpitoad",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Round",
		},
		text: {
			en: "Does 30 damage times the number of your Pokémon that have the Round attack.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Voice",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
