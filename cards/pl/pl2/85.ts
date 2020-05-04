import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-85",
	localId: 85,

	// Card informations
	name: {
		en: "Turtwig GL",
		fr: "Tortipouss  Niv. 20",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 387,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/85/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/85/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",

	abilities: [{
		id: 450,
		type: AbilityType.POKEBODY,
		name: {
			en: "Overgrow",
			fr: "Engrais",
		},
		text: {
			en: "As long as Turtwig 's remaining HP is 60 or less, each of Turtwig 's attacks does 30 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			fr: "Tant qu'il ne reste à Tortipouss  qu'un maximum de 60 PV, chacune de ses attaques inflige 30 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Drain",
			fr: "Giga-sangsue",
		},
		text: {
			en: "After your attack, remove from Turtwig the number of damage counters equal to the damage you did to the Defending Pokémon.",
			fr: "Après votre attaque, retirez à Tortipouss  autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
