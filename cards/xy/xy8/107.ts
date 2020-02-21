import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-107",
	localId: 107,

	// Card informations
	name: {
		en: "Xerneas",
		fr: "Xerneas",
	},

	hp: 120,

	type: [
		Type.FAIRY,
	],

	dexId: 716,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/107/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/107/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rainbow Force",
			fr: "Force Arc-en-Ciel",
		},
		text: {
			en: "This attack does 30 more damage for each different type of Pokémon on your Bench.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque type différent de Pokémon sur votre Banc.",
		},
		damage: 10
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Creation",
			fr: "Création de Puissance",
		},
		text: {
			en: "If this Pokémon was healed during this turn, this attack does 80 more damage.",
			fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
