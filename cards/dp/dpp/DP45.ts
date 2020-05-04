import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP45",
	localId: "DP45",

	// Card informations
	name: {
		en: "Charizard G",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Wataru Kawahara",

	abilities: [{
		id: 863,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Call for Power",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move an Energy attached to 1 of your Pokémon to Charizard . This power can't be used if Charizard  is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Malevolent Fire",
		},
		text: {
			en: "Flip a coin. If tails, discard all Energy attached to Charizard .",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
