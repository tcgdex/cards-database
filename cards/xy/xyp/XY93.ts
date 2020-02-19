import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xyp/XY93/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY93/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY93/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY93/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

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

