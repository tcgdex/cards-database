import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "det1-1",
	localId: 1,

	// Card informations
	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 1,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/det1/1/low",
			fr: "https://assets.tcgdex.net/fr/sm/det1/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/det1/1/high",
			fr: "https://assets.tcgdex.net/fr/sm/det1/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Find a Friend",
			fr: "Trouver un Ami",
		},
		text: {
			en: "Search your deck for a {G} Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez un Pokémon Grass dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
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
		name: "Detective Pikachu",
		code: "det1"
	}
}

export default card
