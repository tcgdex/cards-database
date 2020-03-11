import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-51",
	localId: 51,

	// Card informations
	name: {
		en: "Hoopa",
		fr: "Hoopa",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 720,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/51/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/51/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hyperspace Punch",
			fr: "Poing Hyperespace",
		},
		text: {
			en: "This attack does 20 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Portal Strike",
			fr: "Frappe Dimensionnelle",
		},
		text: {
			en: "This Pokémon can't use Portal Strike during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Frappe Dimensionnelle pendant votre prochain tour.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
