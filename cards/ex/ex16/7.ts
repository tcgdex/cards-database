import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-7",
	localId: 7,

	// Card informations
	name: {
		en: "Cradily",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 346,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/7/high",
		},
	},

	evolveFrom: {
		en: "Lileep",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 100,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Evolutionary Call",
		},
		text: {
			en: "Once during your turn, when you play Cradily from your hand to evolve 1 of your Pokémon, you may search your deck for up to 3 in any combination of Basic Pokémon or Evolution cards. Show them to your opponent and put them into your hand. Shuffle your deck afterward.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Ring",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
