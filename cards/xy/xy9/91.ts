import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-91",
	localId: 91,

	// Card informations
	name: {
		en: "Stantler",
		fr: "Cerfrousse",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 234,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/91/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/91/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mystifying Horns",
			fr: "Mysti-Cornes",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Big Charge",
			fr: "Grande Charge",
		},
		text: {
			en: "If you have any Mega Evolution Pokémon on your Bench, this attack does 50 more damage.",
			fr: "Si vous avez un Pokémon Méga-Évolution sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
