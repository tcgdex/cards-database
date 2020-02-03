import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm2/101/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/101/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/101/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



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

