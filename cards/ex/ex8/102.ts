import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-102",
	localId: 102,

	// Card informations
	name: {
		en: "Rayquaza ex",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Shin-ichi Yoshikawa",

	abilities: [{
		id: 803,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dragon Boost",
		},
		text: {
			en: "Once during your turn, when you put Rayquaza ex from your hand onto your Bench, you may move any number of basic Energy cards attached to your Pokémon to Rayquaza ex.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.LIGHTNING
		],
		name: {
			en: "Spiral Blast",
		},
		text: {
			en: "Does 20 damage for each basic Energy card attached to Rayquaza ex.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
