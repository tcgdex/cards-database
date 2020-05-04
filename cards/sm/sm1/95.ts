import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-95",
	localId: 95,

	// Card informations
	name: {
		en: "Dragonair",
		fr: "Draco",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/95/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/95/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/95/high",
		},
	},

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "hatachu",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dragon's Wish",
			fr: "Souhait du Dragon",
		},
		text: {
			en: "During your next turn, you may attach any number of Energy cards from your hand to your Pokémon.",
			fr: "Pendant votre prochain tour, vous pouvez attacher autant de cartes Énergie que vous voulez de votre main à vos Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Tail Smack",
			fr: "Coup de Queue",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
