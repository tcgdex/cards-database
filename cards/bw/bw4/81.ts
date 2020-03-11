import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-81",
	localId: 81,

	// Card informations
	name: {
		en: "Persian",
		fr: "Persian",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 53,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/81/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/81/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/81/high",
		},
	},

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nasty Plot",
			fr: "Machination",
		},
		text: {
			en: "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Claw",
			fr: "Griffe Ombre",
		},
		text: {
			en: "Flip a coin. If heads, discard a random card from your opponent's hand.",
			fr: "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
