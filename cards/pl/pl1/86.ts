import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-86",
	localId: 86,

	// Card informations
	name: {
		en: "Poochyena",
		fr: "Medhyena",
	},

	hp: 50,

	type: [
		Type.DARKNESS,
	],

	dexId: 261,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/86/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/86/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		name: {
			en: "Howl",
			fr: "Grondement",
		},
		text: {
			en: "Search your deck for Poochyena and put it onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez Medhyena dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Lunge",
			fr: "Coup rapide",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
