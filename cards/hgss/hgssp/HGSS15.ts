import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgssp-HGSS15",
	localId: "HGSS15",

	// Card informations
	name: {
		en: "Shuckle",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 213,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},

	abilities: [{
		id: 1413,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fermenting Liquid",
		},
		text: {
			en: "Whenever you attach an Energy card from your hand to Shuckle, draw a card.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Shell Stunner",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to Shuckle by attacks during your opponent's next turn.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HGSS Black Star Promos",
		code: "hgssp"
	}
}

export default card
