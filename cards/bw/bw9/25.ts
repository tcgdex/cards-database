import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-25",
	localId: 25,

	// Card informations
	name: {
		en: "Palpitoad",
		fr: "Batracné",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 536,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/25/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/25/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/25/high",
		},
	},

	evolveFrom: {
		en: "Tympole",
		fr: "Tritonde",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vibration",
			fr: "Vibration",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Suspicious Soundwave",
			fr: "Onde Sonore Suspecte",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
