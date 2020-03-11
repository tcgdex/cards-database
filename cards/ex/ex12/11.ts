import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-11",
	localId: 11,

	// Card informations
	name: {
		en: "Muk",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/11/high",
		},
	},

	evolveFrom: {
		en: "Grimer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 213,
		type: AbilityType.POKEBODY,
		name: {
			en: "Stench",
		},
		text: {
			en: "As long as Muk is your Active Pokémon, each player's Pokémon can't use any Poké-Powers.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Ring",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Toss",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
