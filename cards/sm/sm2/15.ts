import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-15",
	localId: 15,

	// Card informations
	name: {
		en: "Salandit",
		fr: "Tritox",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 757,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/15/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/15/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venoshock",
			fr: "Choc Venin",
		},
		text: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
