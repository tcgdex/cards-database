import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-40",
	localId: 40,

	// Card informations
	name: {
		en: "Gulpin",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 316,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 12,
		name: "Sachiko Adachi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Endure",
		},
		text: {
			en: "Flip a coin. If heads, during your opponent's next turn, if Gulpin would be Knocked Out by damage from an attack, Gulpin is not Knocked Out and its remaining HP becomes 10 instead.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Pound",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
