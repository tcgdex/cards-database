import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-69",
	localId: 69,

	// Card informations
	name: {
		en: "Weedle",
		fr: "Aspicot",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 13,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/69/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/69/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/69/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Speed Evolution",
			fr: "Évolution rapide",
		},
		text: {
			en: "Search your deck for a card that evolves from Weedle and put it onto Weedle. (This counts as evolving Weedle.) Shuffle your deck afterward.",
			fr: "Cherchez une carte Évolution d'Aspicot dans votre deck et placez-la sur Aspicot (cela équivaut à faire évoluer Aspicot). Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sting",
			fr: "Dard",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
