import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-71",
	localId: 71,

	// Card informations
	name: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 624,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/71/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/71/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 10
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
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
