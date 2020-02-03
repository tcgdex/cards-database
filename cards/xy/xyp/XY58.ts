import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xyp/XY58/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY58/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY58/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY58/high.png",
		},
	},

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

