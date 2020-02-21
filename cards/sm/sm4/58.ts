import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-58",
	localId: 58,

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
			en: "https://assets.tcgdex.net/en/sm/sm4/58/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/58/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/58/high",
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
			Type.DARKNESS
		],
		name: {
			en: "Rear Kick",
			fr: "Ruade",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
		},
		damage: 20
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
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
