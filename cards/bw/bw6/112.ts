import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-112",
	localId: 112,

	// Card informations
	name: {
		en: "Braviary",
		fr: "Gueriaigle",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 628,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/112/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/112/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/112/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/112/high.png",
		},
	},

	evolveFrom: {
		en: "Rufflet",
		fr: "Furaiglon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Attack",
			fr: "Furie",
		},
		text: {
			en: "Flip 3 coins. This attack does 50 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

