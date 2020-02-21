import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-55",
	localId: 55,

	// Card informations
	name: {
		en: "Natu",
		fr: "Natu",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 177,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/55/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/55/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Teleport",
			fr: "Téléport",
		},
		text: {
			en: "Switch Natu with 1 of your Benched Pokémon.",
			fr: "Échangez Natu avec l'un des Pokémon de votre Banc.",
		},
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
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
