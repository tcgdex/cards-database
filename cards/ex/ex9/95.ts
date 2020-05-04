import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-95",
	localId: 95,

	// Card informations
	name: {
		en: "Medicham ex",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 308,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/95/high",
		},
	},

	evolveFrom: {
		en: "Meditite",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Hikaru Koike",

	abilities: [{
		id: 943,
		type: AbilityType.POKEBODY,
		name: {
			en: "Wise Aura",
		},
		text: {
			en: "As long as Medicham ex is your Active Pokémon, each Pokémon (excluding Pokémon-ex) (both yours and your opponent's) can't use any Poké-Powers.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pure Power",
		},
		text: {
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Kick",
		},
		text: {
			en: "If the Defending Pokémon has Fighting Resistance, this attack does 60 damage plus 40 more damage.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
