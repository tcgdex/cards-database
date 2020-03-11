import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-99",
	localId: 99,

	// Card informations
	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 115,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/99/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/99/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "TOKIYA",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cross-Cut",
			fr: "Coupe Transversale",
		},
		text: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 30 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hurricane Punch",
			fr: "Poing Ouragan",
		},
		text: {
			en: "Flip 4 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
