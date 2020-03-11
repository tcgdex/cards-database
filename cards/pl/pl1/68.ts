import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-68",
	localId: 68,

	// Card informations
	name: {
		en: "Carnivine",
		fr: "Vortente",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 455,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/68/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/68/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {
			en: "Poison Breath",
			fr: "Haleine empoisonnée",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Sweet Saliva",
			fr: "Douce salive",
		},
		text: {
			en: "Remove 1 damage counter from each of your Benched Pokémon.",
			fr: "Retirez 1 marqueur de dégât à chacun de vos Pokémon de Banc.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
