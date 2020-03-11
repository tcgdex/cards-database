import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-20",
	localId: 20,

	// Card informations
	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 781,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/20/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/20/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/20/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "TOKIYA",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sea Creeper Net",
			fr: "Filet Varech",
		},
		text: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez un Pokémon de base dans votre deck, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
