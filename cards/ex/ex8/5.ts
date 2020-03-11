import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-5",
	localId: 5,

	// Card informations
	name: {
		en: "Claydol",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 344,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/5/high",
		},
	},

	evolveFrom: {
		en: "Baltoy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 958,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Psychic Trace",
		},
		text: {
			en: "Once during your turn (before your attack), if Claydol is your Active Pokémon, you may shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand. This power can't be used if Claydol is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ancient Mantra",
		},
		text: {
			en: "If Claydol has any Psychic Energy attached to it, the Defending Pokémon is now Confused. If Claydol has any Fighting Energy attached to it, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
