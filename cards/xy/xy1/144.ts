import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-144",
	localId: 144,

	// Card informations
	name: {
		en: "Yveltal-EX",
		fr: "Yveltal-EX",
	},

	hp: 170,

	type: [
		Type.DARKNESS,
	],

	dexId: 717,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/144/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/144/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/144/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Evil Ball",
			fr: "Balle Maléfique",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Energy attached to both Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Y Cyclone",
			fr: "Cyclone Y",
		},
		text: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
