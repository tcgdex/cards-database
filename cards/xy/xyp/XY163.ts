import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY163",
	localId: "XY163",

	// Card informations
	name: {
		en: "Weezing",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY163/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY163/high",
		},
	},

	evolveFrom: {
		en: "Koffing",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},

	abilities: [{
		id: 145,
		type: AbilityType.TALENT,
		name: {
			en: "Levitate",
		},
		text: {
			en: "If this Pokémon has any Energy attached to it, this Pokémon has no Retreat Cost.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Smokescreen",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
