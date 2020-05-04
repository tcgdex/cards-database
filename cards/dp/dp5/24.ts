import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-24",
	localId: 24,

	// Card informations
	name: {
		en: "Leafeon",
		fr: "Phyllali",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 470,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/24/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/24/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/24/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Drain",
			fr: "Spirale épuisante",
		},
		text: {
			en: "Remove 1 damage counter from Leafeon.",
			fr: "Retirez à Phyllali 1 marqueur de dégât.",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Blade",
			fr: "Lame-feuille",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
