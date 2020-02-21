import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-32",
	localId: 32,

	// Card informations
	name: {
		en: "Minun",
		fr: "Négapi",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 312,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/32/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/32/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Negative Discard",
			fr: "Défausse Négative",
		},
		text: {
			en: "Put 2 basic Energy cards from your discard pile into your hand.",
			fr: "Prenez 2 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Static Shock",
			fr: "Choc Statique",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
