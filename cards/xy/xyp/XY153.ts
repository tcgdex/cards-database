import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY153",
	localId: "XY153",

	// Card informations
	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY153/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY153/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY153/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY153/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "You Iribi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stoke",
			fr: "Attisement",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for up to 2 Fire Energy cards and attach them to this Pokémon. Shuffle your deck afterward.",
			fr: "Lancez une pièce. Si c'est face, cherchez jusqu'à 2 cartes Énergie Fire dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Wing",
			fr: "Aile de Feu",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
