import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-13",
	localId: 13,

	// Card informations
	name: {
		en: "Camerupt",
		fr: "Camérupt",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 323,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/13/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/13/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/13/high",
		},
	},

	evolveFrom: {
		en: "Numel",
		fr: "Chamallot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Eruption",
			fr: "Éruption",
		},
		text: {
			en: "Each player discards the top card of his or her deck. This attack does 60 more damage for each Energy card discarded in this way.",
			fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
