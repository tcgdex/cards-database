import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-105",
	localId: 105,

	// Card informations
	name: {
		en: "Crabominable",
		fr: "Crabominable",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 740,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/105/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/105/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/105/high",
		},
	},

	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fight Alone",
			fr: "Combat Solitaire",
		},
		text: {
			en: "If you have fewer Pokémon in play than your opponent, this attack does 50 more damage for each Pokémon fewer you have in play.",
			fr: "Si vous avez moins de Pokémon en jeu que votre adversaire, cette attaque inflige 50 dégâts supplémentaires pour chaque Pokémon de moins que vous avez en jeu.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnum Punch",
			fr: "Poing Magnum",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
