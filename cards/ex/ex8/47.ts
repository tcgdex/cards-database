import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-47",
	localId: 47,

	// Card informations
	name: {
		en: "Solrock",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 338,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/47/high",
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
		id: 837,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sunbeam",
		},
		text: {
			en: "The maximum HP for each Lunatone you have in play is now 80.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scorching Light",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Burned.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Reflected Beam",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon for each Lunatone you have in play. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
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
