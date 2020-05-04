import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-97",
	localId: 97,

	// Card informations
	name: {
		en: "Staraptor",
		fr: "Étouraptor",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 398,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/97/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/97/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/97/high",
		},
	},

	evolveFrom: {
		en: "Staravia",
		fr: "Étourvol",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-Aile",
		},
		damage: 60
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strong Breeze",
			fr: "Forte Brise",
		},
		text: {
			en: "Your opponent shuffles the Defending Pokémon and all cards attached to it into his or her deck.",
			fr: "Votre adversaire mélange le Pokémon Défenseur et toutes les cartes qui lui sont attachées avec son deck.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
