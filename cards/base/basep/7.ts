import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "basep-7",
	localId: 7,

	// Card informations
	name: {
		en: "Jigglypuff",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 39,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "First Aid",
		},
		text: {
			en: "Remove 1 damage counter from Jigglypuff.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-Edge",
		},
		text: {
			en: "Jigglypuff does 20 damage to itself.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
