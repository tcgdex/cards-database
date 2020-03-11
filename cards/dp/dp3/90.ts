import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-90",
	localId: 90,

	// Card informations
	name: {
		en: "Hoppip",
		fr: "Granivol",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 187,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/90/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/90/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Motofumi Fujiwara",

	abilities: [{
		id: 1063,
		type: AbilityType.POKEBODY,
		name: {
			en: "Cottonweed",
			fr: "Mauvaise herbe de coton",
		},
		text: {
			en: "If Hoppip has any Grass Energy attached to it, the Retreat Cost for Hoppip is 0.",
			fr: "Si Granivol possède de l'Énergie Grass, son Coût de retraite est de 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Hover Heal",
			fr: "Guérison flottante",
		},
		text: {
			en: "Remove all Special Conditions from Hoppip.",
			fr: "Retirez à Granivol tous ses États Spéciaux.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
