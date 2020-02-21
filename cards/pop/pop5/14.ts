import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-14",
	localId: 14,

	// Card informations
	name: {
		en: "Pelipper (Delta Species)",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 279,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/14/high",
		},
	},

	evolveFrom: {
		en: "Wingull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 437,
		type: AbilityType.POKEBODY,
		name: {
			en: "Mist",
		},
		text: {
			en: "Any damage done to Pelipper by attacks from Stage 2 Evolved Pokémon (both yours and your opponent's) is reduced by 30 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Wing",
		},
		text: {
			en: "Does 10 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 50
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
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
