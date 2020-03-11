import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-120",
	localId: 120,

	// Card informations
	name: {
		en: "Skitty",
		fr: "Skitty",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 300,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/120/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/120/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/120/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fake Out",
			fr: "Bluff",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
