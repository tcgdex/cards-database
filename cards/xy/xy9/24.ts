import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-24",
	localId: 24,

	// Card informations
	name: {
		en: "Cloyster",
		fr: "Crustabri",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 91,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/24/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/24/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/24/high",
		},
	},

	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Sudden Grip",
			fr: "Pince Surprise",
		},
		text: {
			en: "If this Pokémon evolved from Shellder during this turn, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Si ce Pokémon a évolué de Kokiyas pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
