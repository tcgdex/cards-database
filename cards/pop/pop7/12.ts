import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop7-12",
	localId: 12,

	// Card informations
	name: {
		en: "Burmy Sandy Cloak",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 412,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop7/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop7/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 358,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Wear Cloak",
		},
		text: {
			en: "Once during your turn (before your attack), if Burmy Sandy Cloak is your Active Pokémon, you may search your discard pile for a basic Fighting Energy card and attach it to Burmy Sandy Cloak.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sandy Cloak Tackle",
		},
		text: {
			en: "If Burmy Sandy Cloak has any Fighting Energy attached to it, this attack does 10 damage plus 10 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
