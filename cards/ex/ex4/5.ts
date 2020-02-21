import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-5",
	localId: 5,

	// Card informations
	name: {
		en: "Team Aqua's Sharpedo",
	},

	hp: 70,

	type: [
		Type.WATER,
		Type.DARKNESS,
	],

	dexId: 319,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rage",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each damage counter on Team Aqua's Sharpedo.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Slash",
		},
		text: {
			en: "Team Aqua's Sharpedo can't attack during your next turn.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
