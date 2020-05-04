import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-69",
	localId: 69,

	// Card informations
	name: {
		en: "Mienfoo",
		fr: "Kungfouine",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 619,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/69/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/69/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
