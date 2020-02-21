import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-75",
	localId: 75,

	// Card informations
	name: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 329,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/75/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/75/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/75/high",
		},
	},

	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix",
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
			en: "Charge Energy",
			fr: "Recharge Énergétique",
		},
		text: {
			en: "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.FIGHTING
		],
		name: {
			en: "Vibration",
			fr: "Vibration",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
