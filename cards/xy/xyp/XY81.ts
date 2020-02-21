import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY81",
	localId: "XY81",

	// Card informations
	name: {
		en: "White Kyurem",
		fr: "Kyurem Blanc",
	},

	hp: 120,

	type: [
		Type.DRAGON,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY81/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY81/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Flare Blizzard",
		},
		text: {
			en: "This Pokémon can't use Flare Blizzard during your next turn.",
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
