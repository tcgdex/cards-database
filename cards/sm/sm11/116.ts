import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-116",
	localId: 116,

	// Card informations
	name: {
		en: "Riolu",
		fr: "Riolu",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 447,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/116/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/116/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/116/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/116/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "AKIRA EGAWA",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Kick",
			fr: "Koud’Pied",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
