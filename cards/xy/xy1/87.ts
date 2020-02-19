import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy1/87/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/87/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/87/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



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

