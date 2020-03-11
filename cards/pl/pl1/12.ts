import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Palkia G",
		fr: "Palkia ",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 484,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/12/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/12/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: "Yusuke Ishikawa",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Splashing Turn",
			fr: "Tour éclaboussant",
		},
		text: {
			en: "You may switch Palkia with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger Palkia  avec 1 de vos Pokémon de Banc.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pearl Breath",
			fr: "Haleine de perle",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
