import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base3-37",
	localId: 37,

	// Card informations
	name: {
		en: "Graveler",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 75,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/37/high",
		},
	},

	evolveFrom: {
		en: "Geodude",
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
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Harden",
		},
		text: {
			en: "During your opponent's next turn, whenever 30 or less damage is done to Graveler (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Throw",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fossil",
		code: "base3"
	}
}

export default card
