import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-110",
	localId: 110,

	// Card informations
	name: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 318,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/110/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/110/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "SATOSHI NAKAI",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
