import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-82",
	localId: 82,

	// Card informations
	name: {
		en: "Koga's Weedle",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 13,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sting",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Stinger",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, the Defending Pokémon is now Paralyzed.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
