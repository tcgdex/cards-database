import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-52",
	localId: 52,

	// Card informations
	name: {
		en: "Hariyama",
		fr: "Hariyama",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 297,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/52/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/52/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/52/high",
		},
	},

	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "TOKIYA",

	abilities: [{
		id: 70,
		type: AbilityType.TALENT,
		name: {
			en: "Thick Fat",
			fr: "Isograisse",
		},
		text: {
			en: "Any damage done to this Pokémon by attacks from your opponent's Fire or Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Fire ou Water de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rocket Slap",
			fr: "Baffe Accélérée",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
