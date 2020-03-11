import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-67",
	localId: 67,

	// Card informations
	name: {
		en: "Unown C",
		fr: "Zarbi C",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/67/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/67/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Nakaoka",

	abilities: [{
		id: 45,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Call",
			fr: "CRIER",
		},
		text: {
			en: "Once during your turn (before your attack), if Unown C is on your Bench, you may flip a coin. If heads, search your deck for any 1 Unown and put it onto your Bench. Shuffle your deck afterward.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi C est sur votre Banc, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre deck 1 Zarbi et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
