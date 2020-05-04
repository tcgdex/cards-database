import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-16",
	localId: 16,

	// Card informations
	name: {
		en: "Staraptor",
		fr: "Etouraptor",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 398,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/16/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/16/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/16/high",
		},
	},

	evolveFrom: {
		en: "Staravia",
		fr: "Etourvol",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masahiko Ishii",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Accelerative Dive",
			fr: "Plongeon accélérant",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all damage done to Staraptor by attacks (both yours and your opponent's) until the end of your next turn.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, prévenez tous les dégâts infligés à Etouraptor par des attaques (les vôtres et celles de votre adversaire) jusqu'à la fin de votre prochain tour.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brave Heart",
			fr: "Bravoure",
		},
		text: {
			en: "Flip a coin. If tails, Staraptor does 100 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, Etouraptor s'inflige 100 dégâts.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
