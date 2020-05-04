import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-122",
	localId: 122,

	// Card informations
	name: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},

	hp: 50,

	type: [
		Type.METAL,
	],

	dexId: 50,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/122/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/122/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/122/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
		},
		text: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez un Pokémon de base dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
