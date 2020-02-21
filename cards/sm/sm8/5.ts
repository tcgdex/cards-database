import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-5",
	localId: 5,

	// Card informations
	name: {
		en: "Chikorita",
		fr: "Germignon",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 152,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/5/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/5/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
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
			en: "Razor Leaf",
			fr: "Tranch’Herbe",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
