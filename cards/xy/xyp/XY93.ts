import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY93",
	localId: "XY93",

	// Card informations
	name: {
		en: "Celebi",
		fr: "Celebi",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY93/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY93/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 732,
		type: AbilityType.TALENT,
		name: {
			en: "Leap Through Time",
		},
		text: {
			en: "When this Pokémon is Knocked Out, flip a coin. If heads, your opponent can't take a Prize card. Shuffle this Pokémon and all cards attached to it into your deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sparkle Mine",
			fr: "Stop Θ",
		},
		text: {
			en: "Put 1 damage counter on each of your opponent's Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
