import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgssp-HGSS05",
	localId: "HGSS05",

	// Card informations
	name: {
		en: "Hoothoot",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 163,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS05/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hsp/HGSS05/high",
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

	abilities: [{
		id: 289,
		type: AbilityType.POKEBODY,
		name: {
			en: "Insomnia",
		},
		text: {
			en: "Hoothoot can't be Asleep.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HGSS Black Star Promos",
		code: "hgssp"
	}
}

export default card
