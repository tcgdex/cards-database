import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-18",
	localId: 18,

	// Card informations
	name: {
		en: "M Blastoise-EX",
		fr: "M-Tortank-EX",
	},

	hp: 220,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/18/high",
		},
	},

	evolveFrom: {
		en: "Blastoise-EX",
		fr: "Tortank-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dread Launcher",
			fr: "Lanceur d'Effroi",
		},
		text: {
			en: "Flip a coin. If tails, discard 2 Water Energy attached to this Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, défaussez 2 Énergies Water attachées à ce Pokémon.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
