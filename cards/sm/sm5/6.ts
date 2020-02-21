import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-6",
	localId: 6,

	// Card informations
	name: {
		en: "Turtwig",
		fr: "Tortipouss",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 387,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/6/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/6/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/6/high",
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
			en: "Synthesis",
			fr: "Synthèse",
		},
		text: {
			en: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Cherchez une carte Énergie Grass dans votre deck et attachez-la à l’un de vos Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
