import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-111",
	localId: 111,

	// Card informations
	name: {
		en: "Stufful",
		fr: "Nounourson",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 759,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/111/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/111/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
