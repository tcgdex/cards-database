import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-132",
	localId: 132,

	// Card informations
	name: {
		en: "Galarian Stunfisk",
	},

	hp: 120,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/132/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/132/high.png",
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
			en: "Snap Trap",
		},
		text: {
			en: "If this Pokémon is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), discard an Energy from the Attacking Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Damage Rush",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
		},
		damage: "30+"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

