import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-9",
	localId: 9,

	// Card informations
	name: {
		en: "Regigigas",
		fr: "Regigigas",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 486,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/9/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/9/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/9/high",
		},
	},

	evolveFrom: {
		fr: "Regigigas",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 692,
		type: AbilityType.POKEBODY,
		name: {
			en: "Regi Form",
			fr: "Regi forme",
		},
		text: {
			en: "If you have Regirock, Regice, and Registeel in play, the attack cost of Regigigas's attacks is Colorless less.",
			fr: "Si vous avez Regirock, Regice et Registeel en jeu, le Coût d'attaque des attaques de Regigigas est Colorless de moins.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.FIGHTING,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Giga Power",
			fr: "Giga pouvoir",
		},
		text: {
			en: "You may do 60 damage plus 40 more damage. If you do, Regigigas does 40 damage to itself.",
			fr: "Vous pouvez infliger 60 dégâts plus 40 dégâts supplémentaires. Regigigas s'inflige alors 40 dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
