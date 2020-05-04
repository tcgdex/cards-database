import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-61",
	localId: 61,

	// Card informations
	name: {
		en: "Koffing",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 109,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 1240,
		type: AbilityType.POKEBODY,
		name: {
			en: "Knockout Gas",
		},
		text: {
			en: "If Koffing is your Active Pokémon and is Knocked Out by an opponent's attack, the Attacking Pokémon is now Confused and Poisoned.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
