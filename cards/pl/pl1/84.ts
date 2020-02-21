import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-84",
	localId: 84,

	// Card informations
	name: {
		en: "Nosepass",
		fr: "Tarinor",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 299,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/84/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/84/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pull",
			fr: "Tirer",
		},
		text: {
			en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
			fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
