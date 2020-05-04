import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-11",
	localId: 11,

	// Card informations
	name: {
		en: "Lombre",
		fr: "Lombre",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 271,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/11/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/11/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/11/high",
		},
	},

	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Hook",
			fr: "Crochet",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
