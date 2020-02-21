import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-47",
	localId: 47,

	// Card informations
	name: {
		en: "Unown [D]",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/47/high",
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
		id: 826,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Darkness",
		},
		text: {
			en: "Whenever a D Pokémon damages 1 of your Pokémon, reduce that damage by 30 (after applying Weakness and Resistance). This power stops working if you have more than 1 Unown D in play. (This power even works if Unown D is Asleep, Confused, or Paralyzed.)",
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





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
