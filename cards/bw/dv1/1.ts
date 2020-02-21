import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-1",
	localId: 1,

	// Card informations
	name: {
		en: "Dratini",
		fr: "Minidraco",
	},

	hp: 40,

	type: [
		Type.DRAGON,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/1/low",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/1/high",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.LIGHTNING
		],
		name: {
			en: "Wrap",
			fr: "Ligotage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card
