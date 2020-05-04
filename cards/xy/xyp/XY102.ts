import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY102",
	localId: "XY102",

	// Card informations
	name: {
		en: "Aurorus-EX",
		fr: "Dragmara-EX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 699,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY102/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY102/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Toyste Beach",

	abilities: [{
		id: 49,
		type: AbilityType.TALENT,
		name: {
			en: "Frozen Charm",
			fr: "Amulette Gelée",
		},
		text: {
			en: "Each of your Pokémon that has any Water Energy attached to it can't be Paralyzed. (If any of those Pokémon are Paralyzed, remove that Special Condition.)",
			fr: "Aucun de vos Pokémon auquel de l'Énergie Water est attachée ne peut être Paralysé. (Si l'un de ces Pokémon est déjà Paralysé, retirez cet État Spécial.)",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Crystal Breath",
		},
		text: {
			en: "This Pokémon can't attack during your next turn",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
