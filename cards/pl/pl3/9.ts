import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-9",
	localId: 9,

	// Card informations
	name: {
		en: "Regigigas FB",
		fr: "Regigigas ",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 486,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/9/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/9/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drain Punch",
			fr: "Vampipoing",
		},
		text: {
			en: "Remove from Regigigas FB a number of damage counters equal to the amount of Energy attached to the Defending Pokémon.",
			fr: "Retirez à Regigigas  autant de marqueurs de dégât qu'il y a d'Énergie(s) attachée(s) au Pokémon Défenseur.",
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
			en: "Rainbow Lariat",
			fr: "Lasso arc-en-ciel",
		},
		text: {
			en: "Does 20 damage times the number of different types of Pokémon SP you have in play.",
			fr: "Inflige 20 dégâts multipliés par le nombre de types de Pokémon SP différents que vous avez en jeu.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
