import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-111",
	localId: 111,

	// Card informations
	name: {
		en: "Oddish",
		fr: "Mystherbe",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 43,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/111/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/111/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 47,
		name: "Hiroki Fuchino"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stun Spore",
			fr: "Para-spore",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Blot",
			fr: "Pâté",
		},
		text: {
			en: "Remove 1 damage counter from Oddish.",
			fr: "Retirez à Mystherbe 1 marqueur de dégât.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
