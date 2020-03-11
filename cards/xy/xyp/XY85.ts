import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY85",
	localId: "XY85",

	// Card informations
	name: {
		en: "Hoopa-EX",
		fr: "Hoopa-EX",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 720,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY85/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY85/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hyperspace Ring",
			fr: "Anneau Hyperespace",
		},
		text: {
			en: "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 cartes Objet dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Wonder Trick",
		},
		text: {
			en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
