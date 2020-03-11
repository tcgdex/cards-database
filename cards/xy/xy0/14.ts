import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-14",
	localId: 14,

	// Card informations
	name: {
		en: "Greninja",
		fr: "Amphinobi",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 658,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/14/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/14/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/14/high",
		},
	},

	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Mat Block",
			fr: "Tatamigaeshi",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Edge",
			fr: "Aqua-Dague",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
