import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-58",
	localId: 58,

	// Card informations
	name: {
		en: "Croagunk",
		fr: "Cradopaud",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 453,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/58/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/58/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Poison Up",
			fr: "Poison Toxique",
		},
		text: {
			en: "If the Defending Pokémon is Poisoned, put 3 more damage counters on that Pokémon between turns. This effect can be applied more than once.",
			fr: "Si le Pokémon Défenseur est Empoisonné, placez 3 marqueurs de dégâts supplémentaires sur ce dernier entre chaque tour. Vous pouvez appliquer cet effet plusieurs fois.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
