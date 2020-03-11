import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC14",
	localId: "RC14",

	// Card informations
	name: {
		en: "Espurr",
		fr: "Psystigri",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 677,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC14/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC14/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Twinkle",
			fr: "Étincellement",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
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
		name: "Generations",
		code: "g1"
	}
}

export default card
