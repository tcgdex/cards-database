import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-84",
	localId: 84,

	// Card informations
	name: {
		en: "Spiritomb C",
		fr: "Spiritomb ",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 442,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/84/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/84/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sharpshooting",
			fr: "Tir de précision",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Lock Up",
			fr: "Enfermer",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 20
	}],



	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
