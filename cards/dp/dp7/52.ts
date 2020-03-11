import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-52",
	localId: 52,

	// Card informations
	name: {
		en: "Staravia",
		fr: "Staravia",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 397,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/52/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/52/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/52/high",
		},
	},

	evolveFrom: {
		en: "Starly",
		fr: "Etourmi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-aile",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shot Air",
			fr: "Bouffée d'air",
		},
		text: {
			en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
