import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-16",
	localId: 16,

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
			en: "https://assets.tcgdex.net/en/hgss/hgss4/16/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/16/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Saliva Lure",
			fr: "Piège de salive",
		},
		text: {
			en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
			fr: "Échangez le Pokémon Défenseur avec l'un des Pokémon de Banc de votre adversaire.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Stick and Absorb",
			fr: "Colle et absorbe",
		},
		text: {
			en: "Remove 3 damage counters from Carnivine. The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Retirez 3 marqueurs de dégât à Vortente. Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
