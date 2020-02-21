import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-2",
	localId: 2,

	// Card informations
	name: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 14,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/2/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/2/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/2/high",
		},
	},

	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
