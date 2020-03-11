import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-14",
	localId: 14,

	// Card informations
	name: {
		en: "Shedinja",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 292,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/14/high",
		},
	},

	evolveFrom: {
		en: "Nincada",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yukiko Baba",

	abilities: [{
		id: 17,
		type: AbilityType.POKEBODY,
		name: {
			en: "Empty Shell",
		},
		text: {
			en: "When Shedinja is Knocked Out, your opponent doesn't take any Prize cards.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Extra Curse",
		},
		text: {
			en: "Put 2 damage counters on the Defending Pokémon. If the Defending Pokémon is Pokémon-ex, put 4 damage counters instead.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
