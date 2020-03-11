import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-12",
	localId: 12,

	// Card informations
	name: {
		en: "Foongus",
		fr: "Trompignon",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 590,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/12/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/12/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",

	abilities: [{
		id: 521,
		type: AbilityType.TALENT,
		name: {
			en: "Play Ball",
			fr: "Jeu de Ballon",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench, you may put 3 Poké Ball cards from your discard pile into your hand.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez ajouter 3 cartes Poké Ball de votre pile de défausse à votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
