import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-37",
	localId: 37,

	// Card informations
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/37/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/37/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 556,
		type: AbilityType.POKEBODY,
		name: {
			en: "Focus Wall",
			fr: "Mur de concentration",
		},
		text: {
			en: "If Mr. Mime would be Knocked Out by damage from an attack that does 70 or more damage (after applying Weakness and Resistance), Mr. Mime is not Knocked Out and its remaining HP becomes 10 instead.",
			fr: "Si M. Mime est mis K.O. par des dégâts d'une attaque infligeant 70 dégâts ou plus (après application de la Faiblesse et de la Résistance), M. Mime n'est pas mis K.O. À la place, il lui reste 10 PV.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Desperate Slap",
			fr: "Gifle désespérée",
		},
		text: {
			en: "If Mr. Mime already has 5 or more damage counters on it, this attack does 20 damage plus 40 more damage.",
			fr: "Si M. Mime possède déjà au moins 5 marqueurs de dégât, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires.",
		},
		damage: 20
	}],





	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
