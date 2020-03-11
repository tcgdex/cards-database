import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-66",
	localId: 66,

	// Card informations
	name: {
		en: "Brionne",
		fr: "Otarlette",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 729,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/66/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/66/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/66/high",
		},
	},

	evolveFrom: {
		en: "Popplio",
		fr: "Otaquin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Captivate",
			fr: "Séduction",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
