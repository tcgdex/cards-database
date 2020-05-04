import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-95",
	localId: 95,

	// Card informations
	name: {
		en: "Gabite",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 444,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/95/high",
		},
	},

	evolveFrom: {
		en: "Gible",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.FIGHTING
		],
		name: {
			en: "Shred",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on the Defending Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
