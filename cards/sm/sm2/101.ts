import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-101",
	localId: 101,

	// Card informations
	name: {
		en: "Chansey",
		fr: "Leveinard",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 113,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/101/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/101/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bind Wound",
			fr: "Blessure Pansée",
		},
		text: {
			en: "Flip a coin. If heads, heal 30 damage from 1 of your Pokémon.",
			fr: "Lancez une pièce. Si c’est face, soignez 30 dégâts à l’un de vos Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
