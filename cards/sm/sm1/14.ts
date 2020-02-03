import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Fomantis",
		fr: "Mimantis",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 753,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/14/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/14/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/14/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
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
			fr: "Cherchez une carte Énergie Grass dans votre deck et attachez-la à l’un de vos Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leafage",
			fr: "Feuillage",
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
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

