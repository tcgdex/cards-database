import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-50",
	localId: 50,

	// Card informations
	name: {
		en: "Koffing",
		fr: "Smogo",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 109,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/50/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/50/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Foul Gas",
			fr: "Gaz Infect",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned. If tails, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
