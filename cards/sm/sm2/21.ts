import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-21",
	localId: 21,

	// Card informations
	name: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 37,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/21/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/21/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "You Iribi",



	attacks: [{
		name: {
			en: "Beacon",
			fr: "Flambeau",
		},
		text: {
			en: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Icy Snow",
			fr: "Verglas",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
