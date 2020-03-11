import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-65",
	localId: 65,

	// Card informations
	name: {
		en: "Swoobat",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 528,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/65/high",
		},
	},

	evolveFrom: {
		en: "Woobat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Gift",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for 2 Psychic Energy cards and attach them to your Pokémon in any way you like. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Heart Stamp",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
