import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-21",
	localId: 21,

	// Card informations
	name: {
		en: "Smeargle",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 235,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 665,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Portrait",
		},
		text: {
			en: "Once during your turn (before your attack), if Smeargle is your Active Pokémon, you may look at your opponent's hand. If you do, choose a Supporter card you find there and use the effect of that card as the effect of this power. This power can't be used if Smeargle is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Rap",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
