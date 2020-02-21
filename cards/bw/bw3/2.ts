import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-2",
	localId: 2,

	// Card informations
	name: {
		en: "Swadloon",
		fr: "Couverdure",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 541,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/2/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/2/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/2/high",
		},
	},

	evolveFrom: {
		en: "Sewaddle",
		fr: "Larveyette",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "String Shot",
			fr: "Sécrétion",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
