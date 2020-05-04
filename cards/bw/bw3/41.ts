import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-41",
	localId: 41,

	// Card informations
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
	},

	hp: 140,

	type: [
		Type.LIGHTNING,
	],

	dexId: 604,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/41/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/41/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/41/high",
		},
	},

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Acid",
			fr: "Acide",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Wild Charge",
			fr: "Éclair Fou",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
