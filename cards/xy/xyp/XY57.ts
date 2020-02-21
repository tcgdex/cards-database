import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY57",
	localId: "XY57",

	// Card informations
	name: {
		en: "Fearow",
		fr: "Rapasdepic",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 22,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY57/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY57/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY57/high",
		},
	},

	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 28,
		name: "match"
	},

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Évolution Δ",
		},
		text: {
			fr: "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Repeating Drill",
		},
		text: {
			en: "Flip 5 coins. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Nosedive",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
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
