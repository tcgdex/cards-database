import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-3",
	localId: 3,

	// Card informations
	name: {
		en: "Servine",
		fr: "Lianaja",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 496,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/3/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/3/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/3/high",
		},
	},

	evolveFrom: {
		en: "Snivy",
		fr: "Vipélierre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wrap",
			fr: "Ligotage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
