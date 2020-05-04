import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-22",
	localId: 22,

	// Card informations
	name: {
		en: "Latias",
		fr: "Latias",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/22/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/22/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Daisuke Ito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Miraculous Light",
			fr: "Lumière miraculeuse",
		},
		text: {
			en: "Remove 2 damage counters and all Special Conditions from Latias.",
			fr: "Retirez à Latias 2 marqueurs de dégât ainsi que tous ses États Spéciaux.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Mist Ball",
			fr: "Boule de brume",
		},
		text: {
			en: "Discard a Fire Energy and a Water Energy attached to Latias.",
			fr: "Défaussez une Énergie Fire et une Énergie Water attachées à Latias.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
