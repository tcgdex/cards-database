import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC3",
	localId: "RC3",

	// Card informations
	name: {
		en: "Charmander",
		fr: "Salamèche",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 4,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC3/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC3/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Playful",
			fr: "Garnement",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage times the number of damage counters on this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
