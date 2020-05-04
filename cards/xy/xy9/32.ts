import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-32",
	localId: 32,

	// Card informations
	name: {
		en: "Manaphy-EX",
		fr: "Manaphy-EX",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 490,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/32/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/32/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",

	abilities: [{
		id: 1428,
		type: AbilityType.TALENT,
		name: {
			en: "Aqua Tube",
			fr: "Tube Aqua",
		},
		text: {
			en: "Each of your Pokémon that has any Water Energy attached to it has no Retreat Cost.",
			fr: "Chacun de vos Pokémon auquel de l'Énergie Water est attachée n'a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Mineral Pump",
			fr: "Pompe Minérale",
		},
		text: {
			en: "Heal 30 damage from each of your Benched Pokémon.",
			fr: "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
