import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-135",
	localId: 135,

	// Card informations
	name: {
		en: "Marill",
		fr: "Marill",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 183,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/135/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/135/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/135/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/135/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
