import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-60",
	localId: 60,

	// Card informations
	name: {
		en: "Gible",
		fr: "Griknot",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 443,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/60/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/60/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
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
		type: Type.GRASS,
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
