import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "basep-38",
	localId: 38,

	// Card informations
	name: {
		en: "Unown [J]",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hideki Kazama",

	abilities: [{
		id: 901,
		type: AbilityType.POKEPOWER,
		name: {
			en: "[Join]",
		},
		text: {
			en: "Once during your turn (before you attack), if you have Unown J, Unown O, Unown I, and Unown N on your Bench, you may search your deck for a Basic Pokémon or Evolution Pokémon card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
