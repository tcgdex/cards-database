import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-34",
	localId: 34,

	// Card informations
	name: {
		en: "Nidorina δ",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 30,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/34/high",
		},
	},

	evolveFrom: {
		en: "Nidoran?",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rear Kick",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
