import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-39",
	localId: 39,

	// Card informations
	name: {
		en: "Xurkitree",
		fr: "Câblifère",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 796,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/39/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/39/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Dazzle Blast",
			fr: "Explosion de Lumière",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Cablegram",
			fr: "Câblogramme",
		},
		text: {
			en: "If you have exactly 3 Prize cards remaining, your opponent's Active Pokémon is now Paralyzed.",
			fr: "S’il vous reste exactement 3 cartes Récompense, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
