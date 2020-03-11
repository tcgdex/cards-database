import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-25",
	localId: 25,

	// Card informations
	name: {
		en: "Xatu δ",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 178,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/25/high",
		},
	},

	evolveFrom: {
		en: "Natu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 112,
		type: AbilityType.POKEBODY,
		name: {
			en: "Extra Feather",
		},
		text: {
			en: "Each of your Stage 2 Pokémon-ex does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Confuse Ray",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
