import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV27",
	localId: "SV27",

	// Card informations
	name: {
		en: "Magnemite",
		fr: "Magnéti",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 81,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV27/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV27/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "SATOSHI NAKAI",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Searching Magnet",
			fr: "Aimant Inquisiteur",
		},
		text: {
			en: "Search your deck for up to 3 Metal Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 3 cartes Énergie Metal dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.METAL
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
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
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
