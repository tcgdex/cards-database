import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM45",
	localId: "SM45",

	// Card informations
	name: {
		en: "Tapu Lele",
		fr: "Tokopiyon",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 785,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM45/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM45/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "You Iribi",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psywave",
			fr: "Vague Psy",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Magical Swap",
			fr: "Permutation Magique",
		},
		text: {
			en: "Move any number of damage counters on your opponent's Pokémon to their other Pokémon in any way you like.",
			fr: "Déplacez autant de marqueurs de dégâts que vous voulez des Pokémon de votre adversaire vers ses autres Pokémon, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
