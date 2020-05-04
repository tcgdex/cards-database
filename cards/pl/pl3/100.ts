import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-100",
	localId: 100,

	// Card informations
	name: {
		en: "Corphish",
		fr: "Écrapince",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 341,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/100/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/100/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Crabhammer",
			fr: "Pince-masse",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Sharp Pincers",
			fr: "Pinces pointues",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
