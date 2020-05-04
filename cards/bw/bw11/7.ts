import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-7",
	localId: 7,

	// Card informations
	name: {
		en: "Servine",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 496,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/7/high",
		},
	},

	evolveFrom: {
		en: "Snivy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Wring Out",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy attached to the Defending Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
