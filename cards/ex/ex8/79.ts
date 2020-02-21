import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-79",
	localId: 79,

	// Card informations
	name: {
		en: "Swablu",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 333,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/79/high",
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
		id: 202,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fluff",
		},
		text: {
			en: "Whenever Swablu would be damaged or affected by an opponent's attack and already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack, including damage, done to Swablu.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
