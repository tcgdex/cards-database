import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-3",
	localId: 3,

	// Card informations
	name: {
		en: "Butterfree",
		fr: "Papilusion",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 12,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/3/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/3/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/3/high",
		},
	},

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
