import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-143",
	localId: 143,

	// Card informations
	name: {
		en: "Cresselia-EX",
		fr: "Cresselia-EX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 488,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/143/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/143/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/143/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/143/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 413,
		type: AbilityType.TALENT,
		name: {
			en: "Sparkling Particles",
			fr: "Particules Étincelantes",
		},
		text: {
			en: "At any time between turns, heal 10 damage from this Pokémon.",
			fr: "N'importe quand entre chaque tour, soignez 10 dégâts à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Protection",
			fr: "Protection Psy",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon has no Weakness.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
