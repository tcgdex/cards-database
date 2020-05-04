import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Groudon",
		fr: "Groudon",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 383,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/6/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/6/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Volcano Stomp",
			fr: "Écrasement volcanique",
		},
		text: {
			en: "Flip a coin. If heads, discard the top 4 cards of your opponent's deck. If tails, discard the top 4 cards of your deck.",
			fr: "Lancez une pièce. Si c’est face, défaussez les 4 premières cartes du deck de votre adversaire. Si c’est pile, défaussez les 4 premières cartes de votre deck.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
