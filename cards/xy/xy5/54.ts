import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-54",
	localId: 54,

	// Card informations
	name: {
		en: "Kyogre-EX",
		fr: "Kyogre-EX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/54/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/54/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/54/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 161,
		name: "Ryota Murayama"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Whirlpool",
			fr: "Siphon Colossal",
		},
		text: {
			en: "Return 2 Water Energy attached to this Pokémon to your hand.",
			fr: "Reprenez 2 Énergies Water attachées à ce Pokémon dans votre main.",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

