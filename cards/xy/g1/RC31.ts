import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC31",
	localId: "RC31",

	// Card informations
	name: {
		en: "M Gardevoir-EX",
		fr: "M-Gardevoir-EX",
	},

	hp: 210,

	type: [
		Type.FAIRY,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC31/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC31/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC31/high",
		},
	},

	evolveFrom: {
		en: "Gardevoir-EX",
		fr: "Gardevoir-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brilliant Arrow",
			fr: "Flèche Éclatante",
		},
		text: {
			en: "This attack does 30 damage times the amount of Fairy Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Fairy attachées à tous vos Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
