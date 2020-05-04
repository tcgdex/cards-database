import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop7-3",
	localId: 3,

	// Card informations
	name: {
		en: "Latias",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop7/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop7/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Daisuke Ito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Miraculous Light",
		},
		text: {
			en: "Remove 2 damage counters and all Special Conditions from Latias.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Mist Ball",
		},
		text: {
			en: "Discard a Fire Energy and a Water Energy attached to Latias.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
