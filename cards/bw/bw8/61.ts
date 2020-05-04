import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-61",
	localId: 61,

	// Card informations
	name: {
		en: "Gallade",
		fr: "Gallame",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 475,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/61/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/61/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/61/high",
		},
	},

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Powerful Storm",
			fr: "Tempête Puissante",
		},
		text: {
			en: "Does 20 damage times the amount of Energy attached to all of your Pokémon.",
			fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous vos Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swift Lunge",
			fr: "Estocade",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
