import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-25",
	localId: 25,

	// Card informations
	name: {
		en: "Hypno",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 97,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/25/high",
		},
	},

	evolveFrom: {
		en: "Drowsee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yukiko Baba",

	abilities: [{
		id: 349,
		type: AbilityType.POKEBODY,
		name: {
			en: "Eerie Aura",
		},
		text: {
			en: "As long as Hypno is your Active Pokémon, put 2 damage counters on each Pokémon that remains Asleep between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hypnotic Ray",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
