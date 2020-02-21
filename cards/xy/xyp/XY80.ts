import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY80",
	localId: "XY80",

	// Card informations
	name: {
		en: "Black Kyurem",
		fr: "Kyurem Noir",
	},

	hp: 120,

	type: [
		Type.DRAGON,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY80/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY80/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY80/high",
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
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Nail",
			fr: "Clou Tonnerre",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Frozen Slice",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
