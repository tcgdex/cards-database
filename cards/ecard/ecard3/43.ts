import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-43",
	localId: 43,

	// Card informations
	name: {
		en: "Piloswine",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 221,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/43/high",
		},
	},

	evolveFrom: {
		en: "Swinub",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 119,
		name: "Shin-ichi Yoshida"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Impaling Tusk",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Continuous Charge",
		},
		text: {
			en: "Flip 4 coins. This attack foes 30 damage plus 20 more damage for each heads. Put a damage counter on Piloswine for each heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
