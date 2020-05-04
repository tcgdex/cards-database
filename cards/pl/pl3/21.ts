import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-21",
	localId: 21,

	// Card informations
	name: {
		en: "Chimecho",
		fr: "Éoko",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 358,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/21/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/21/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Heal Bell",
			fr: "Glas de soin",
		},
		text: {
			en: "Remove 3 damage counters from each of your Pokémon.",
			fr: "Retirez à chacun de vos Pokémon 3 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Super Psywave",
			fr: "Super vague psy",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. Count the amount of Energy attached to that Pokémon. Put that many damage counters on the Pokémon.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Comptabilisez le nombre d'Énergies attachées à ce Pokémon. Placez autant de marqueurs de dégât sur ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
