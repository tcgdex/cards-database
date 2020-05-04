import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-107",
	localId: 107,

	// Card informations
	name: {
		en: "Latias ◇",
		fr: "Latias ",
	},

	hp: 130,

	type: [
		Type.DRAGON,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/107/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/107/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dreamy Mist",
			fr: "Brume Onirique",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to each of your Basic Benched Dragon Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à chacun des Pokémon Dragon de base sur votre Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
