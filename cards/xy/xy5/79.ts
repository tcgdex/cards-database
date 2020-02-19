import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-79",
	localId: 79,

	// Card informations
	name: {
		en: "Meditite",
		fr: "Méditikka",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 307,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/79/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/79/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/79/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/79/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Smack",
			fr: "Claque",
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
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

