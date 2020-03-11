import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-100",
	localId: 100,

	// Card informations
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/100/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/100/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Draw",
			fr: "Double Pioche",
		},
		text: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flail",
			fr: "Gigotage",
		},
		text: {
			en: "This attack does 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
		},
		damage: "10×"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
