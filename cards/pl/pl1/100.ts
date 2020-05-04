import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-100",
	localId: 100,

	// Card informations
	name: {
		en: "Torkoal",
		fr: "Chartor",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 324,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/100/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/100/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Super Singe",
			fr: "Ça sent le roussi!",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flame Ball",
			fr: "Boule de feu",
		},
		text: {
			en: "Move an Energy card attached to Torkoal to 1 of your Benched Pokémon.",
			fr: "Déplacez une carte Énergie attachée à Charcor sur 1 des Pokémon de votre Banc.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
