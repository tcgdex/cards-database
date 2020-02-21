import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-57",
	localId: 57,

	// Card informations
	name: {
		en: "Cacnea",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 331,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/57/high",
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

	abilities: [{
		id: 585,
		type: AbilityType.POKEBODY,
		name: {
			en: "Poison Payback",
		},
		text: {
			en: "If Cacnea is your Active Pokémon and is damaged by an opponent's attack (even if Cacnea is Knocked Out), the Attacking Pokémon is now Poisoned.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Light Punch",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
