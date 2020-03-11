import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "np-24",
	localId: 24,

	// Card informations
	name: {
		en: "Chimecho",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 358,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Resonate",
		},
		text: {
			en: "Your opponent switches each Defending Pokémon with his or her Benched Pokémon. If your opponent has only 1 Benched Pokémon, you choose the Defending Pokémon to switch.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Healing Sound",
		},
		text: {
			en: "Remove 3 damage counters from each of your Active Pokémon. Each Defending Pokémon is now Asleep.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
