import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgssp-HGSS11",
	localId: "HGSS11",

	// Card informations
	name: {
		en: "Latios",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},

	abilities: [{
		id: 1012,
		type: AbilityType.POKEBODY,
		name: {
			en: "Luster Float",
		},
		text: {
			en: "If you have Latias in play, the Retreat Cost for Latios is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Infinite Wing",
		},
		text: {
			en: "Discard 2 Energy attached to Latios.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.COLORLESS,
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
