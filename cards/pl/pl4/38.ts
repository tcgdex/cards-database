import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-38",
	localId: 38,

	// Card informations
	name: {
		en: "Grovyle",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 253,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/38/high",
		},
	},

	evolveFrom: {
		en: "Treecko",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomoaki Imakuni",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Detect",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Grovyle during your opponent's next turn.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Blade Arms",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
