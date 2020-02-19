import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy6/44/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/44/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/44/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/44/high.png",
		},
	},

	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

