import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-92",
	localId: 92,

	// Card informations
	name: {
		en: "Exploud ex",
	},

	hp: 150,

	type: [
		Type.COLORLESS,
	],

	dexId: 295,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/92/high",
		},
	},

	evolveFrom: {
		en: "Loudred",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 989,
		type: AbilityType.POKEBODY,
		name: {
			en: "Extra Noise",
		},
		text: {
			en: "As long as Exploud ex is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon-ex between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Derail",
		},
		text: {
			en: "Discard a Special Energy card, if any, attached to the Defending Pokémon.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Tail",
		},
		text: {
			en: "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, this attack does 60 damage plus 20 more damage.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
