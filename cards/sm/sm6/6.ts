import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-6",
	localId: 6,

	// Card informations
	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 664,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/6/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/6/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Ultra Evolution",
			fr: "Ultra Évolution",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for Vivillon and put it onto this Scatterbug to evolve it. Then, shuffle your deck.",
			fr: "Lancez une pièce. Si c’est face, cherchez un Prismillon dans votre deck, puis placez-le sur ce Lépidonille pour le faire évoluer. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
