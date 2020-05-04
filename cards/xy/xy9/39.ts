import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-39",
	localId: 39,

	// Card informations
	name: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 657,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/39/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/39/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/39/high",
		},
	},

	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Duplicates",
			fr: "Duplicat'Eau",
		},
		text: {
			en: "Search your deck for up to 3 Frogadier and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 3 Croâporal dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
