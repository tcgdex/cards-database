import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-44",
	localId: 44,

	// Card informations
	name: {
		en: "Togetic",
		fr: "Togetic",
	},

	hp: 80,

	type: [
		Type.FAIRY,
	],

	dexId: 176,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/44/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/44/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/44/high",
		},
	},

	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Go Fetch",
			fr: "Récup'",
		},
		text: {
			en: "Shuffle 3 basic Energy cards from your discard pile into your deck.",
			fr: "Mélangez 3 cartes Énergie de base de votre pile de défausse avec votre deck.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 40
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

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
