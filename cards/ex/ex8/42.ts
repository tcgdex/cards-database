import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-42",
	localId: 42,

	// Card informations
	name: {
		en: "Nosepass",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 299,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",

	abilities: [{
		id: 375,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Magnetic Reversal",
		},
		text: {
			en: "Once during your turn (before your attack), if Nosepass is your Active Pokémon, you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. This power can't be used if Nosepass is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sharpen",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
