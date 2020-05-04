import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY142",
	localId: "XY142",

	// Card informations
	name: {
		en: "Azelf",
		fr: "Créfadet",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 482,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY142/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY142/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY142/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "chibi",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Shining Eyes",
			fr: "Yeux Brillants",
		},
		text: {
			en: "Put 2 damage counters on each of your opponent's Pokémon that has any damage counters on it.",
			fr: "Placez 2 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mind Bend",
			fr: "Contrôleur d'Esprit",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
