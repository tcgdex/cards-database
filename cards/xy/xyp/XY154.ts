import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY154",
	localId: "XY154",

	// Card informations
	name: {
		en: "Ho-Oh BREAK",
		fr: "Ho-Oh TURBO",
	},

	hp: 150,

	type: [
		Type.FIRE,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY154/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY154/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY154/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY154/high.png",
		},
	},

	evolveFrom: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shining Flame",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "This Pokémon can't use Shining Flame during your next turn.",
		},
		damage: 160
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Flamme Brillante",
		},
		text: {
			fr: "Ce Pokémon ne peut pas utiliser Flamme Brillante pendant votre prochain tour.",
		},
		damage: 160
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

