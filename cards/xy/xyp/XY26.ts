import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY26",
	localId: "XY26",

	// Card informations
	name: {
		en: "Pyroar",
		fr: "Némélios",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 668,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY26/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY26/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY26/high",
		},
	},

	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Royal Flare",
			fr: "Flamme Royale",
		},
		text: {
			en: "Discard 2 Energy attached to this Pokémon.",
			fr: "Défaussez 2 Énergies attachées à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
