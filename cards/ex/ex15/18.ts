import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-18",
	localId: 18,

	// Card informations
	name: {
		en: "Ledian δ",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 166,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/18/high",
		},
	},

	evolveFrom: {
		en: "Ledyba",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 77,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Prowl",
		},
		text: {
			en: "Once during your turn, when you play Ledian from your hand to evolve 1 of your Pokémon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Star",
		},
		text: {
			en: "If Ledian has a Pokémon Tool card attached to it, draw 3 cards.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
