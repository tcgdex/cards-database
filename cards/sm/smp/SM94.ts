import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM94",
	localId: "SM94",

	// Card informations
	name: {
		en: "Wash Rotom",
		fr: "Motisma Lavage",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM94/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM94/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shigenori Negishi",

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
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wash Arrow",
			fr: "Flèche de Lavage",
		},
		text: {
			en: "This attack does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
