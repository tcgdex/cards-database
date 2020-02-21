import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-6",
	localId: 6,

	// Card informations
	name: {
		en: "Phantump",
		fr: "Brocélôme",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 708,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/6/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/6/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde Folie",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
