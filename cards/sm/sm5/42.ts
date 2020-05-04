import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-42",
	localId: 42,

	// Card informations
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 490,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/42/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/42/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Deep Currents",
			fr: "Courants Profonds",
		},
		text: {
			en: "Shuffle 5 Water Energy cards from your discard pile into your deck.",
			fr: "Mélangez 5 cartes Énergie Water de votre pile de défausse avec votre deck.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
