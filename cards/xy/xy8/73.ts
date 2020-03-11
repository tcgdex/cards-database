import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-73",
	localId: 73,

	// Card informations
	name: {
		en: "Elgyem",
		fr: "Lewsor",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 605,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/73/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/73/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psych Up",
			fr: "Boost",
		},
		text: {
			en: "During your next turn, this Pokémon's Psych Up attack does 20 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Boost de ce Pokémon inflige 20 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
