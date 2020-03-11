import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-54",
	localId: 54,

	// Card informations
	name: {
		en: "Nosepass",
		fr: "Tarinor",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 299,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/54/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/54/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "You Iribi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Thunder Wave",
			fr: "Cage-Éclair",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
