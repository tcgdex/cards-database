import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-15",
	localId: 15,

	// Card informations
	name: {
		en: "Kyogre",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scary Face",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Water Energy attached to Kyogre but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
