import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "np-23",
	localId: 23,

	// Card informations
	name: {
		en: "Metang",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 375,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/23/high",
		},
	},

	evolveFrom: {
		en: "Beldum",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Metal Load",
		},
		text: {
			en: "Search your discard pile for a Metal Energy card and attach it to Metang.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Claw",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
