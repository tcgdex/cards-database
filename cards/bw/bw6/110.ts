import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-110",
	localId: 110,

	// Card informations
	name: {
		en: "Bouffalant",
		fr: "Frison",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 626,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/110/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/110/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",

	abilities: [{
		id: 1439,
		type: AbilityType.TALENT,
		name: {
			en: "Bouffer",
			fr: "Touffe Protectrice",
		},
		text: {
			en: "Any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gold Breaker",
			fr: "Goliastruction",
		},
		text: {
			en: "If the Defending Pokémon is a Pokémon-EX, this attack does 60 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
