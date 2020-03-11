import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-30",
	localId: 30,

	// Card informations
	name: {
		en: "Jynx",
		fr: "Lippoutou",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 124,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/30/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/30/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Slap",
			fr: "Gifle",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Lovely Kiss",
			fr: "Grobisou",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
