import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-125",
	localId: 125,

	// Card informations
	name: {
		en: "Starly",
		fr: "Étourmi",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 396,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/125/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/125/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/125/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Pals",
			fr: "Appel aux Copains",
		},
		text: {
			en: "Search your deck for as many Starly as you like and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck autant d'Étourmi que vous voulez et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
