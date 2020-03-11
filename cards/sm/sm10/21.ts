import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-21",
	localId: 21,

	// Card informations
	name: {
		en: "Growlithe",
		fr: "Caninos",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 58,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/21/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/21/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "tetsuya koizumi",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
