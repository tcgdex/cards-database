import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-68",
	localId: 68,

	// Card informations
	name: {
		en: "Fraxure",
		fr: "Incisache",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 611,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/68/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/68/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/68/high",
		},
	},

	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Paralyzing Gaze",
			fr: "Regard Paralysant",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.METAL
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
