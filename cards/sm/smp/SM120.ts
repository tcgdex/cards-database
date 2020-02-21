import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM120",
	localId: "SM120",

	// Card informations
	name: {
		en: "Rockruff",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 744,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM120/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
