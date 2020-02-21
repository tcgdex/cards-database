import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop8-3",
	localId: 3,

	// Card informations
	name: {
		en: "Luxray",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 405,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop8/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop8/3/high",
		},
	},

	evolveFrom: {
		en: "Luxio",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 111,
		type: AbilityType.POKEBODY,
		name: {
			en: "Intimidating Fang",
		},
		text: {
			en: "As long as Luxray is your Active Pokémon, any damage done by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder",
		},
		text: {
			en: "Flip a coin. If tails, Luxray does 40 damage to itself.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 8",
		code: "pop8"
	}
}

export default card
