import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-78",
	localId: 78,

	// Card informations
	name: {
		en: "Turtwig",
		fr: "Tortipouss",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 387,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/78/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/78/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Baie Kika",
		},
		text: {
			fr: "Si Tortipouss est Confus, retirez-lui l'État Spécial Confus à la fin du tour de chaque joueur.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			fr: "Morsure",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
