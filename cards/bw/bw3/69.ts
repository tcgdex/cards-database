import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw3/69/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/69/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/69/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card

