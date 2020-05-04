import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-42",
	localId: 42,

	// Card informations
	name: {
		en: "Simipour",
		fr: "Flotoutan",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 516,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/42/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/42/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/42/high",
		},
	},

	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Green Fling",
			fr: "Dégommage Plante",
		},
		text: {
			en: "Put 3 Grass Energy cards from your discard pile into your hand.",
			fr: "Prenez 3 cartes Énergie Grass dans votre pile de défausse et ajoutez-les à votre main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hand Fling",
			fr: "Catapu-Main",
		},
		text: {
			en: "This attack does 10 damage times the number of cards in your hand.",
			fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de cartes dans votre main.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
