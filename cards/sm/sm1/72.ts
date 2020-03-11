import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-72",
	localId: 72,

	// Card informations
	name: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 739,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/72/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/72/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Punch",
			fr: "Koud'Poing",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crabhammer",
			fr: "Pince-Masse",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
