import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-97",
	localId: 97,

	// Card informations
	name: {
		en: "Deino",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 633,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Deep Growl",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Power Breath",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
