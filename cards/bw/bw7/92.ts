import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-92",
	localId: 92,

	// Card informations
	name: {
		en: "Vullaby",
		fr: "Vostourno",
	},

	hp: 50,

	type: [
		Type.DARKNESS,
	],

	dexId: 629,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/92/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/92/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/92/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
		},
		damage: 20
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
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

