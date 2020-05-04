import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM195",
	localId: "SM195",

	// Card informations
	name: {
		en: "Charizard-GX",
	},

	hp: 250,

	type: [
		Type.FIRE,
	],

	dexId: 6,


	evolveFrom: {
		en: "Charmeleon",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "Framestore",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Raging Destruction",
		},
		text: {
			en: "Discard the top 8 cards of your deck. If any of those cards are Fire Energy cards, attach them to this Pokémon.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steam Artillery",
		},
		damage: 200
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dreadful Flames-GX",
		},
		text: {
			en: "Discard an Energy from each of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 250
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
