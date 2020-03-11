import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-1",
	localId: 1,

	// Card informations
	name: {
		en: "Beedrill δ",
	},

	hp: 90,

	type: [
		Type.GRASS,
		Type.METAL,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/1/high",
		},
	},

	evolveFrom: {
		en: "Kakuna",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 34,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Final Sting",
		},
		text: {
			en: "Once during your turn (before your attack), you may Knock Out Beedrill. If you do, choose 1 of your opponent's Defending Pokémon. That Pokémon is now Paralyzed and Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns. This power can't be used if Beedrill is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Super Slash",
		},
		text: {
			en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 50 damage plus 30 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
