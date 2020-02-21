import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-67",
	localId: 67,

	// Card informations
	name: {
		en: "Unown [E]",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/67/high",
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
		id: 828,
		type: AbilityType.POKEPOWER,
		name: {
			en: "[Engage]",
		},
		text: {
			en: "When you play Unown E from your hand, your opponent may shuffle his or her hand into his or her deck and then draw 4 cards. Either way, you may shuffle your hand into your deck and draw 4 cards.",
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





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
