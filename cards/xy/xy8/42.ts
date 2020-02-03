import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy8/42/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/42/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/42/high.png",
		},
	},

	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

