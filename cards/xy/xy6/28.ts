import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-28",
	localId: 28,

	// Card informations
	name: {
		en: "Natu",
		fr: "Natu",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 177,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/28/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/28/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Plus Δ",
		},
		text: {
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque de ce Pokémon, récupérez une carte Récompense supplémentaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psywave",
			fr: "Vague Psy",
		},
		text: {
			en: "This attack does 10 damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts multipliés par le nombre d'Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
