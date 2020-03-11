import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-2",
	localId: 2,

	// Card informations
	name: {
		en: "Cacturne",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 332,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/2/high",
		},
	},

	evolveFrom: {
		en: "Cacnea",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 585,
		type: AbilityType.POKEBODY,
		name: {
			en: "Poison Payback",
		},
		text: {
			en: "If Cacturne is your Active Pokémon and is damaged by an opponent's attack (even if Cacturne is Knocked Out), the Attacking Pokémon is now Poisoned.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Feint Attack",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poke-Powers, Poke-Bodies or any other effects on that Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
