import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-47",
	localId: 47,

	// Card informations
	name: {
		en: "Magnezone",
		fr: "Magnézone",
	},

	hp: 140,

	type: [
		Type.LIGHTNING,
	],

	dexId: 462,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/47/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/47/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/47/high",
		},
	},

	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Double Assist",
			fr: "Double Assistance",
		},
		text: {
			en: "Attach 2 basic Energy cards from your discard pile to 1 of your Pokémon.",
			fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à 1 de vos Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tumbling Attack",
			fr: "Attaque Trébuchante",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
