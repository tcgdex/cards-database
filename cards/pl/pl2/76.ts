import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-76",
	localId: 76,

	// Card informations
	name: {
		en: "Quagsire GL",
		fr: "Maraiste  Niv. 34",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 195,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/76/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/76/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 64,
		type: AbilityType.POKEBODY,
		name: {
			en: "Submerge",
			fr: "Submerger",
		},
		text: {
			en: "As long as Quagsire is on your Bench, prevent all damage done to Quagsire by attacks (both yours and your opponent's).",
			fr: "Tant que Maraiste  est sur votre Banc, prévenez tous les dégâts qui lui sont infligés par des attaques (de vos Pokémon et des Pokémon de votre adversaire).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Punch and Run",
			fr: "Frapper et partir en courant",
		},
		text: {
			en: "You may switch Quagsire with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger Maraiste  avec 1 des Pokémon de votre Banc.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
