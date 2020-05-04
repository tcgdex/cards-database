import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-98",
	localId: 98,

	// Card informations
	name: {
		en: "Gligar",
		fr: "Scorplane",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 207,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/98/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/98/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 132,
		type: AbilityType.TALENT,
		name: {
			en: "Free Flight",
			fr: "Vol Gratuit",
		},
		text: {
			en: "If this Pokémon has no Energy attached to it, it has no Retreat Cost.",
			fr: "Si aucune Énergie n’est attachée à ce Pokémon, il n’a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shinobi Strike",
			fr: "Frappe Shinobi",
		},
		text: {
			en: "If you played Janine from your hand during this turn, this attack does 90 more damage.",
			fr: "Si vous avez joué Jeannine de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
