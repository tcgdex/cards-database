import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-74",
	localId: 74,

	// Card informations
	name: {
		en: "Houndour",
		fr: "Malosse",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 228,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/74/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/74/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
