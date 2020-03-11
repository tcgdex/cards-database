import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-87",
	localId: 87,

	// Card informations
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 39,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/87/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/87/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 10
	},{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Heartfelt Song",
			fr: "Chanson du Cœur",
		},
		text: {
			en: "Discard a Darkness Energy attached to your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie Darkness attachée au Pokémon Actif de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
