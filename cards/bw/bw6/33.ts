import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-33",
	localId: 33,

	// Card informations
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 419,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/33/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/33/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/33/high",
		},
	},

	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Waterfall",
			fr: "Cascade",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
