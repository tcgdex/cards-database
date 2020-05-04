import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-99",
	localId: 99,

	// Card informations
	name: {
		en: "Torchic",
		fr: "Poussifeu",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 255,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/99/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/99/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		name: {
			en: "Focus Energy",
			fr: "Puissance",
		},
		text: {
			en: "During your next turn, Torchic's Fire Shard attack's base damage is 80.",
			fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Écharde de feu de Poussifeu sont de 80.",
		},
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fire Shard",
			fr: "Écharde de feu",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
