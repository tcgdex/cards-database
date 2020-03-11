import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY112",
	localId: "XY112",

	// Card informations
	name: {
		en: "Jirachi",
		fr: "Jirachi",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY112/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY112/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Precognitive Dream",
			fr: "Rêve Prémonitoire",
		},
		text: {
			en: "Draw 3 cards. This Pokémon is now Asleep.",
			fr: "Piochez 3 cartes. Ce Pokémon est maintenant Endormi.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
