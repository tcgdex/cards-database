import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-6",
	localId: 6,

	// Card informations
	name: {
		en: "Simisage",
		fr: "Feuiloutan",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 512,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/6/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/6/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/6/high.png",
		},
	},

	evolveFrom: {
		en: "Pansage",
		fr: "Feuillajou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fire Fling",
			fr: "Dégommage Feu",
		},
		text: {
			en: "Put 3 Fire Energy cards from your discard pile into your hand.",
			fr: "Prenez 3 cartes Énergie Fire dans votre pile de défausse et ajoutez-les à votre main.",
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
		type: Type.FIRE,
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

