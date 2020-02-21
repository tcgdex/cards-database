import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-87",
	localId: 87,

	// Card informations
	name: {
		en: "Unown [S]",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/87/high",
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
		id: 631,
		type: AbilityType.POKEPOWER,
		name: {
			en: "[Search]",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at 1 of your Prize cards. Return that Prize card face down. This power can be used even if Unown S is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
