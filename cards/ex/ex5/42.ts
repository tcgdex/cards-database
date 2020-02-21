import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-42",
	localId: 42,

	// Card informations
	name: {
		en: "Medicham",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 308,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/42/high",
		},
	},

	evolveFrom: {
		en: "Meditite",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Steady Punch",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Power Heal",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each damage counter on Medicham. After doing damage, remove 1 damage counter from Medicham.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
