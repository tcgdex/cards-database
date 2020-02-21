import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-36",
	localId: 36,

	// Card informations
	name: {
		en: "Lunatone",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 337,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},

	abilities: [{
		id: 937,
		type: AbilityType.POKEBODY,
		name: {
			en: "Moonglow",
		},
		text: {
			en: "The Retreat Cost for each Solrock you have in play is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Foresight",
		},
		text: {
			en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Target Beam",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Solrock you have in play.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
