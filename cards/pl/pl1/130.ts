import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-130",
	localId: 130,

	// Card informations
	name: {
		en: "Scyther",
		fr: "Insécateur",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 123,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/130/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/130/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/130/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/130/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Swords Dance",
			fr: "Danse-lames",
		},
		text: {
			en: "During your next turn, Scyther's Slash attack's base damage is 60.",
			fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Tranche d'Insécateur sont de 60.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
