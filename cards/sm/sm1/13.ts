import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Grubbin",
		fr: "Larvibule",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 736,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/13/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/13/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vice Grip",
			fr: "Force Poigne",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
