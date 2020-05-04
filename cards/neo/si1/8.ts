import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "si1-8",
	localId: 8,

	// Card informations
	name: {
		en: "Jigglypuff",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 39,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/si1/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/si1/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Keiko Fukuyama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tempting Eyes",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sing",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Southern Islands",
		code: "si1"
	}
}

export default card
