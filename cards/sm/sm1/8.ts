import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-8",
	localId: 8,

	// Card informations
	name: {
		en: "Masquerain",
		fr: "Maskadra",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 284,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/8/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/8/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/8/high",
		},
	},

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "miki kudo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Struggle Bug",
			fr: "Survinsecte",
		},
		text: {
			en: "Move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			fr: "Déplacez une Énergie du Pokémon Actif de votre adversaire vers l’un de ses Pokémon de Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
