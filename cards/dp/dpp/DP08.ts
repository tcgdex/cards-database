import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP08",
	localId: "DP08",

	// Card informations
	name: {
		en: "Shieldon",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 410,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP08/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP08/high",
		},
	},

	evolveFrom: {
		en: "Armor Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Hard Face",
		},
		text: {
			en: "During your opponents next turn, any damage done to Shieldon by attacks is reduced by 20 (after applying Weakness and Resistance).",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shield Attack",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
