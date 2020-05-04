import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-14",
	localId: 14,

	// Card informations
	name: {
		en: "Mow Rotom",
		fr: "Motisma Tonte",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/14/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/14/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",

	abilities: [{
		id: 26,
		type: AbilityType.TALENT,
		name: {
			en: "Roto Motor",
			fr: "Moti-Moteur",
		},
		text: {
			en: "If you have 9 or more Pokémon Tool cards in your discard pile, ignore all Energy in the attack cost of each of this Pokémon's attacks.",
			fr: "Si vous avez 9 cartes Outil Pokémon ou plus dans votre pile de défausse, ignorez toutes les Énergies dans le coût d’attaque de chacune des attaques de ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Special Mow",
			fr: "Tonte Spéciale",
		},
		text: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
