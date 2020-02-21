import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-99",
	localId: 99,

	// Card informations
	name: {
		en: "Cosmog",
		fr: "Cosmog",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 789,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/99/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/99/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Ascension",
			fr: "Ascension",
		},
		text: {
			en: "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
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
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
