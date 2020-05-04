import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-9",
	localId: 9,

	// Card informations
	name: {
		en: "Gardevoir",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/9/high",
		},
	},

	evolveFrom: {
		en: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 614,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Psy Shadow",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. Put 2 damage counters on that Pokémon. Shuffle your deck afterward. This power can't be used if Gardevoir is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Burst",
		},
		text: {
			en: "Does 10 damage times the total amount of Energy attached to Gardevoir and the Defending Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
