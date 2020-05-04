import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-112",
	localId: 112,

	// Card informations
	name: {
		en: "Pikachu",
		fr: "Pikachu Niv. 12",
	},

	hp: 40,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/112/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/112/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Jolt",
			fr: "Secousse tonnerre",
		},
		text: {
			en: "Flip a coin. If tails, Pikachu does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, Pikachu s'inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
