import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-158",
	localId: 158,

	// Card informations
	name: {
		en: "Snorlax",
		fr: "Ronflex",
	},

	hp: 150,

	type: [
		Type.COLORLESS,
	],

	dexId: 143,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/158/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/158/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/158/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/158/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kanahei",

	abilities: [{
		id: 515,
		type: AbilityType.TALENT,
		name: {
			en: "Lazy Eating",
			fr: "Repas Paresseux",
		},
		text: {
			en: "Between turns, heal 10 damage from this Pokémon.",
			fr: "Entre chaque tour, soignez 10 dégâts à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Big Counter",
			fr: "Forte Réplique",
		},
		text: {
			en: "If your opponent's Active Pokémon is a TAG TEAM, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est une ESCOUADE, cette attaque inflige 120 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
