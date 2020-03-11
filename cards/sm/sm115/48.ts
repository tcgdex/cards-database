import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-48",
	localId: 48,

	// Card informations
	name: {
		en: "Eevee",
		fr: "Évoli",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/48/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/48/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/48/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Curiosity",
			fr: "Curiosité",
		},
		text: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire dévoile sa main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spin Tackle",
			fr: "Charge Tournoyante",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
			fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
