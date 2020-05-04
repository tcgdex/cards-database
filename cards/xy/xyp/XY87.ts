import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY87",
	localId: "XY87",

	// Card informations
	name: {
		en: "M Swampert-EX",
		fr: "M Laggron-EX",
	},

	hp: 220,

	type: [
		Type.WATER,
	],

	dexId: 260,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY87/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY87/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY87/high",
		},
	},

	evolveFrom: {
		en: "Swampert-EX",
		fr: "Laggron-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strongarm Impact",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "You may do 30 more damage. If you do, discard the top 3 cards of each player's deck.",
		},
		damage: 130
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Impact Bras d'Fer",
		},
		text: {
			fr: "Vous pouvez infliger 30 dégâts supplémentaires. Dans ce cas, défaussez les trois cartes du dessus du deck de chaque joueur.",
		},
		damage: "130+"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
