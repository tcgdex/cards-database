import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-101",
	localId: 101,

	// Card informations
	name: {
		en: "Flabébé",
		fr: "Flabébé",
	},

	hp: 30,

	type: [
		Type.FAIRY,
	],

	dexId: 669,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/101/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/101/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Wish",
			fr: "Vœu",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a card and put it into your hand. Shuffle your deck afterward.",
			fr: "Lancez une pièce. Si c'est face, cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
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
