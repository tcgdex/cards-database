import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-84",
	localId: 84,

	// Card informations
	name: {
		en: "Yanma",
		fr: "Yanma",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 193,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/84/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/84/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},

	abilities: [{
		id: 132,
		type: AbilityType.POKEBODY,
		name: {
			en: "Free Flight",
			fr: "Vol gratuit",
		},
		text: {
			en: "If Yanma has no Energy attached to it, Yanma's Retreat Cost is 0.",
			fr: "Si aucune carte Énergie n'est attachée à Yanma, son Coût de retraite est de 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Dive",
			fr: "Plongée",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
