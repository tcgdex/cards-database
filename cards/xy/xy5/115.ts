import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-115",
	localId: 115,

	// Card informations
	name: {
		en: "Spinda",
		fr: "Spinda",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 327,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/115/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/115/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Staggering Steps",
			fr: "Démarche Branlante",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused. If tails, this Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus. Si c'est pile, ce Pokémon est maintenant Confus.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Uproar",
			fr: "Brouhaha",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
