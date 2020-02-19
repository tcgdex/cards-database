import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV38",
	localId: "SV38",

	// Card informations
	name: {
		en: "Gible",
		fr: "Griknot",
	},

	hp: 50,

	type: [
		Type.DRAGON,
	],

	dexId: 443,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV38/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV38/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV38/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV38/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
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
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

