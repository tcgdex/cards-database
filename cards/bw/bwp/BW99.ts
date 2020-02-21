import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW99",
	localId: "BW99",

	// Card informations
	name: {
		en: "Genesect",
		fr: "Genesect",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 649,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW99/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW99/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Breaker Bazooka",
			fr: "Bazooka Infernal",
		},
		text: {
			en: "Discard all Grass Energy attached to this Pokémon.",
			fr: "Défaussez toutes les Énergies Grass attachées à ce Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
