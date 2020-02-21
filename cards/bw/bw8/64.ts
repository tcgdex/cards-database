import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-64",
	localId: 64,

	// Card informations
	name: {
		en: "Trubbish",
		fr: "Miamiasme",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 568,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/64/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/64/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
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
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Bomb",
			fr: "Bomb-Beurk",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
