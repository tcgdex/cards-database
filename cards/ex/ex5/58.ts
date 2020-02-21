import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-58",
	localId: 58,

	// Card informations
	name: {
		en: "Clamperl",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 366,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 276,
		type: AbilityType.POKEBODY,
		name: {
			en: "Exoskeleton",
		},
		text: {
			en: "Any damage done to Clamperl by attacks is reduced by 10 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Bubble",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
