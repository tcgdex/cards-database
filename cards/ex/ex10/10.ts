import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-10",
	localId: 10,

	// Card informations
	name: {
		en: "Octillery",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 224,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/10/high",
		},
	},

	evolveFrom: {
		en: "Remoraid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",

	abilities: [{
		id: 813,
		type: AbilityType.POKEBODY,
		name: {
			en: "Super Suction Cups",
		},
		text: {
			en: "As long as Octillery is your Active Pokémon, your opponent's Pokémon can't retreat.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Standing By",
		},
		text: {
			en: "Discard an Energy card attached to Octillery. During your next turn, Octillery's Pulse Blast attack's base damage is 120.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Pulse Blast",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
