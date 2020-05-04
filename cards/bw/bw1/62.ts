import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-62",
	localId: 62,

	// Card informations
	name: {
		en: "Sawk",
		fr: "Karaclée",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 539,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/62/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/62/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Low Sweep",
			fr: "Balayette",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Beatdown",
			fr: "Dérouillée",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
