import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-28",
	localId: 28,

	// Card informations
	name: {
		en: "Litwick",
		fr: "Funécire",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 607,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/28/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/28/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sowsow",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Find a Friend",
			fr: "Trouver un Ami",
		},
		text: {
			en: "Search your deck for a Fire Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez un Pokémon Fire dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
