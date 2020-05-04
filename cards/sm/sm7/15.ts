import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-15",
	localId: 15,

	// Card informations
	name: {
		en: "Surskit",
		fr: "Arakdo",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 283,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/15/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/15/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/15/high",
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
			en: "Bubble",
			fr: "Écume",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
