import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC25",
	localId: "RC25",

	// Card informations
	name: {
		en: "Fletchling",
		fr: "Passerouge",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 661,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC25/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC25/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Warble",
			fr: "Gazouillement",
		},
		text: {
			en: "Search your deck for up to 2 Fletchling, reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 Passerouge dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
