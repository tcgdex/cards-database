import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm6/6/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/6/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/6/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



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

