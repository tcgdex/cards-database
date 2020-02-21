import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-16",
	localId: 16,

	// Card informations
	name: {
		en: "Genesect",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 649,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Slash",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gaia Blaster",
		},
		text: {
			en: "Does 20 more damage for each Grass Energy attached to this Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
