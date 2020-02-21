import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-59",
	localId: 59,

	// Card informations
	name: {
		en: "Murkrow",
		fr: "Cornebre",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 198,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/59/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/59/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Glide",
			fr: "Glissade",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Cutter",
			fr: "Tranch'Obscur",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
