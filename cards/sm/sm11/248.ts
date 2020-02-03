import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-248",
	localId: 248,

	// Card informations
	name: {
		en: "Dragonite-GX",
	},

	hp: 250,

	type: [
		Type.DRAGON,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/248/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/248/high.png",
		},
	},

	evolveFrom: {
		en: "Dragonair",
	},

	tags: [
		Tag.STAGE2,
	],





	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
		},
		damage: 130
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Judgment",
		},
		text: {
			en: "Discard 3 Energy from this Pokémon.",
		},
		damage: 270
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mach Delivery GX",
		},
		text: {
			en: "You may discard any number of cards from your hand until you have 9 or fewer. Draw cards until you have 10 cards in your hand. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

