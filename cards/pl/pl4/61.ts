import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-61",
	localId: 61,

	// Card informations
	name: {
		en: "Croagunk",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 453,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Astonish",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Punch",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
