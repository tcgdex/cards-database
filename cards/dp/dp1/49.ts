import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-49",
	localId: 49,

	// Card informations
	name: {
		en: "Grotle",
		fr: "Boskara",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 388,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/49/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/49/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/49/high",
		},
	},

	evolveFrom: {
		en: "Turtwig",
		fr: "Tortipouss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Synthesis",
			fr: "Synthése",
		},
		text: {
			en: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck une carte Énergie Grass, et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cut",
			fr: "Coupe",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
