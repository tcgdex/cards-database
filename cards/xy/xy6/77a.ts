import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-77",
	localId: 77,

	// Card informations
	name: {
		en: "Shaymin-EX",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/77a/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/77a/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ayaka Yoshida",

	abilities: [{
		id: 395,
		type: AbilityType.TALENT,
		name: {
			en: "Set Up",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench, you may draw cards until you have 6 cards in your hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Return",
		},
		text: {
			en: "Return this Pokémon and all cards attached to it to your hand.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
