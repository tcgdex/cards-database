import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-5",
	localId: 5,

	// Card informations
	name: {
		en: "Scyther",
		fr: "Insécateur",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 123,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/5/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/5/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hasuno",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Scythe",
			fr: "Faucille Acérée",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
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
