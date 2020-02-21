import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-55",
	localId: 55,

	// Card informations
	name: {
		en: "Eevee",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand-attack",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
		},
		damage: 10
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
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
