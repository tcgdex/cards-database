import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-14",
	localId: 14,

	// Card informations
	name: {
		en: "Unown [A]",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 113,
		name: "CR CG gangs"
	},

	abilities: [{
		id: 657,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Anger",
		},
		text: {
			en: "Whenever 1 of your Pokémon with Unown in its name uses its Hidden Power attack, that attack does 10 more damage for each damage counter on Unown A. If you have more than 1 Unown A in play, use only 1 Anger for each attack.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
