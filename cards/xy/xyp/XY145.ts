import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY145",
	localId: "XY145",

	// Card informations
	name: {
		en: "Volcanion",
		fr: "Volcanion",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 721,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY145/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY145/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY145/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Power Heater",
			fr: "Puissance de Chauffe",
		},
		text: {
			en: "Choose 2 of your Benched Pokémon. Attach a Fire Energy card from your discard pile to each of those Pokémon.",
			fr: "Choisissez 2 de vos Pokémon de Banc. Attachez une carte Énergie Fire de votre pile de défausse à chacun des Pokémon choisis.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Steam Artillery",
			fr: "Artillerie Vapeur",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
