import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-17",
	localId: 17,

	// Card informations
	name: {
		en: "Jynx δ",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 124,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/17/high",
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

	abilities: [{
		id: 66,
		type: AbilityType.POKEBODY,
		name: {
			en: "Stages of Evolution",
		},
		text: {
			en: "As long as Jynx is an Evolved Pokémon, you pay Colorless less to retreat your Fire and Psychic Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Punch",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
