import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-77",
	localId: 77,

	// Card informations
	name: {
		en: "Pincurchin",
		fr: "Wattapik",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/77/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/77/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Shocking Needles",
			fr: "Épines Choquantes",
		},
		text: {
			en: "Flip 4 coins. This attack does 30 damage for each heads. If at least 2 of them are heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face. Si vous obtenez au moins 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: "30×"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
