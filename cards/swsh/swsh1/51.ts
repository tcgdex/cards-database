import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-51",
	localId: 51,

	// Card informations
	name: {
		en: "Qwilfish",
	},

	hp: 90,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/51/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/51/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],



	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Poison Point",
		},
		text: {
			en: "If this Pokémon is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), the Attacking Pokémon is now Poisoned.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Venoshock",
		},
		text: {
			en: "If your opponent’s Active Pokémon is Poisoned, this attack does 60 more damage.",
		},
		damage: "10+"
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

