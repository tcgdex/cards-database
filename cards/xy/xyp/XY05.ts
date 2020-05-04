import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY05",
	localId: "XY05",

	// Card informations
	name: {
		en: "Xerneas",
		fr: "Yveltal",
	},

	hp: 130,

	type: [
		Type.FAIRY,
	],

	dexId: 716,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY05/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY05/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY05/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY05/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Geomancy",
			fr: "Mort-Ailes",
		},
		text: {
			en: "Choose 2 of your Benched Pokémon. For each of those Pokémon, search your deck for a Fairy Energy card and attach it to that Pokémon. Shuffle your deck afterward.",
			fr: "Attachez une carte Énergie Darkness de votre pile de défausse à l'un de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Rainbow Spear",
			fr: "Lame Obscure",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 100
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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
