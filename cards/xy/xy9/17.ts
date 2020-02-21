import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-17",
	localId: 17,

	// Card informations
	name: {
		en: "Golduck",
		fr: "Akwakwak",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 55,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/17/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/17/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/17/high",
		},
	},

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Derail",
			fr: "Déraillement",
		},
		text: {
			en: "Discard a Special Energy attached to your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
