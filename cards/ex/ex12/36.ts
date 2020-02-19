import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-36",
	localId: 36,

	// Card informations
	name: {
		en: "Kabuto",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 140,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/36/high.png",
		},
	},

	evolveFrom: {
		en: "Mysterious Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 53,
		name: "Takao Unno"
	},

	abilities: [{
		id: 696,
		type: AbilityType.POKEBODY,
		name: {
			en: "Ancient Protection",
		},
		text: {
			en: "Each of your Omanyte, Omastar, Kabuto, Kabutops, and Kabutops ex has no Weakness.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Granite Head",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Kabuto by attacks is reduced by 10 (after applying Weakness and Resistance).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card

