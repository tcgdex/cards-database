import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-127",
	localId: 127,

	// Card informations
	name: {
		en: "Shroomish",
		fr: "Balignon",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 285,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/127/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/127/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/127/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
