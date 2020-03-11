import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop9-5",
	localId: 5,

	// Card informations
	name: {
		en: "Rotom",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop9/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop9/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 94,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Type Shift",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Rotom's type is Psychic until the end of your turn",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poltergeist",
		},
		text: {
			en: "Look at your opponent's hand. This attack does 30 damage plus 10 more damage for each Trainer, Supporter, and Stadium card in your opponent's hand.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 9",
		code: "pop9"
	}
}

export default card
