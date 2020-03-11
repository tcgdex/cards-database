import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-59",
	localId: 59,

	// Card informations
	name: {
		en: "Espurr",
		fr: "Psystigri",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 677,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/59/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/59/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Perplexing Eyes",
			fr: "Regard Déroutant",
		},
		text: {
			en: "The Defending Pokémon's Weakness is now Psychic until the end of your next turn. (The amount of Weakness doesn't change.)",
			fr: "La Faiblesse du Pokémon Défenseur est maintenant de type Psychic jusqu’à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
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
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
