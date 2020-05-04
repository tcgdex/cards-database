import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY17",
	localId: "XY17",

	// Card informations
	name: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
	},

	hp: 180,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY17/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY17/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Mega Ascension",
			fr: "Megascension",
		},
		text: {
			en: "Search your deck for M Charizard-EX, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez un M-Dracaufeu-EX dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brave Fire",
			fr: "Flammes de Bravoure",
		},
		text: {
			en: "This Pokémon does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige 30 dégâts.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
