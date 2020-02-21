import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-68",
	localId: 68,

	// Card informations
	name: {
		en: "Garbodor",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 569,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/68/high",
		},
	},

	evolveFrom: {
		en: "Trubbish",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 106,
		name: "Tomoaki Imakuni"
	},

	abilities: [{
		id: 462,
		type: AbilityType.TALENT,
		name: {
			en: "Garbotoxin",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card attached to it, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities (except for Garbotoxin).",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Toss",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
