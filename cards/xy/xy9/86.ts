import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-86",
	localId: 86,

	// Card informations
	name: {
		en: "Dragalge",
		fr: "Kravarech",
	},

	hp: 110,

	type: [
		Type.DRAGON,
	],

	dexId: 691,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/86/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/86/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/86/high",
		},
	},

	evolveFrom: {
		en: "Skrelp",
		fr: "Venalgue",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Severe Poison",
			fr: "Poison Violent",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
		},
	},{
		cost: [
			Type.WATER,
			Type.PSYCHIC
		],
		name: {
			en: "Dragon Pulse",
			fr: "Dracochoc",
		},
		text: {
			en: "Discard the top card of your deck.",
			fr: "Défaussez la carte du dessus de votre deck.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
