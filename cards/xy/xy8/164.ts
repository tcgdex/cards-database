import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-164",
	localId: 164,

	// Card informations
	name: {
		en: "Mewtwo-EX",
		fr: "Mewtwo-EX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/164/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/164/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/164/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/164/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Shatter Shot",
			fr: "Coup Fracassant",
		},
		text: {
			en: "This attack does 30 damage times the amount of Psychic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Psychic attachées à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Damage Change",
			fr: "Change Dégâts",
		},
		text: {
			en: "Switch all damage counters on this Pokémon with those on your opponent's Active Pokémon.",
			fr: "Échangez tous les marqueurs de dégâts de ce Pokémon avec ceux du Pokémon Actif de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
