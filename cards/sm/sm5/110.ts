import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-110",
	localId: 110,

	// Card informations
	name: {
		en: "Fan Rotom",
		fr: "Motisma Hélice",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/110/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/110/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

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
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Fan",
			fr: "Hélice Tournante",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
