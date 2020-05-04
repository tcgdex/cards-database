import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM46",
	localId: "SM46",

	// Card informations
	name: {
		en: "Seviper",
		fr: "Séviper",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 336,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM46/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM46/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Eri Yamaki",

	abilities: [{
		id: 1182,
		type: AbilityType.TALENT,
		name: {
			en: "More Poison",
			fr: "Poison Sans Fin",
		},
		text: {
			en: "Put 1 more damage counter on your opponent's Poisoned Pokémon between turns.",
			fr: "Placez 1 marqueur de dégâts supplémentaire sur le Pokémon Empoisonné de votre adversaire entre chaque tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venomous Fang",
			fr: "Croc-Poison",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
