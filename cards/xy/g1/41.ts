import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-41",
	localId: 41,

	// Card informations
	name: {
		en: "Machoke",
		fr: "Machopeur",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 67,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/41/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/41/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/41/high",
		},
	},

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
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



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
