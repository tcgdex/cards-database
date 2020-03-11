import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-23",
	localId: 23,

	// Card informations
	name: {
		en: "Crawdaunt G",
		fr: "Colhomard ",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 342,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/23/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/23/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: "Wataru Kawahara",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smash Turn",
			fr: "Tour fracassant",
		},
		text: {
			en: "You may switch Crawdaunt G with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger Colhomard  avec 1 de vos Pokémon de Banc.",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
