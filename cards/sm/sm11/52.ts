import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-52",
	localId: 52,

	// Card informations
	name: {
		en: "Pyukumuku",
		fr: "Concombaffe",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 771,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/52/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/52/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "OOYAMA",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collect",
			fr: "Collecte",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
