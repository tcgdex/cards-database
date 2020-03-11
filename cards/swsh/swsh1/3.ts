import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-3",
	localId: 3,

	dexId: 315,

	// Card informations
	name: {
		en: "Roselia",
		fr: "Rosélia",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/3/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/3/low",
		}
	},

	evolveTo: [{
		en: "Roserade",
		fr: "Roserade",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sweet Scent",
			fr: "Doux Parfum",
		},
		text: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts de l’un de vos Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Sting",
			fr: "Dard",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
