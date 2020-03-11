import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-23",
	localId: 23,

	// Card informations
	name: {
		en: "Latios",
		fr: "Latios",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/23/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/23/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Daisuke Ito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Draw",
			fr: "Absorption d'énergie",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a basic Energy card and attach it to Latios. Shuffle your deck afterward.",
			fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Énergie de base et attachez-la à Latios. Ensuite, mélangez votre deck.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Luster Purge",
			fr: "Lumi-Eclat",
		},
		text: {
			en: "Discard 3 Energy attached to Latios.",
			fr: "Défaussez 3 Énergies attachées à Latios.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
