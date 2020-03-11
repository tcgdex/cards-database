import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-26",
	localId: 26,

	// Card informations
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/26/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/26/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Headache",
			fr: "Migraine",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't play any Trainer cards from their hand during their next turn.",
			fr: "Lancez une pièce. Si c’est face, votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
