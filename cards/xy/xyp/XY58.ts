import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY58",
	localId: "XY58",

	// Card informations
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 687,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY58/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY58/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY58/high",
		},
	},

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 725,
		type: AbilityType.TALENT,
		name: {
			en: "Contrary",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon, whenever your opponent flips a coin during his or her turn, treat it as tails.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Conform",
			fr: "Stop Θ",
		},
		text: {
			en: "If you have the same number of cards in your hand as your opponent, your opponent's Active Pokémon is now Confused.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
