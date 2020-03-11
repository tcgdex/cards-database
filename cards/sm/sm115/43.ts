import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-43",
	localId: 43,

	// Card informations
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/43/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/43/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hideki Ishikawa",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Happy Mime",
			fr: "Mime Heureux",
		},
		text: {
			en: "Each player draws a card.",
			fr: "Chaque joueur pioche une carte.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
