import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-26",
	localId: 26,

	// Card informations
	name: {
		en: "Granbull",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 210,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/26/high",
		},
	},

	evolveFrom: {
		en: "Snubbull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Timid Tackle",
		},
		text: {
			en: "Granbull does 20 damage to itself. Switch Granbull with 1 of your Benched Pokémon.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Chomp",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each damage counter on Granbull.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
