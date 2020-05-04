import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-33",
	localId: 33,

	// Card informations
	name: {
		en: "Mawile",
		fr: "Mysdibule",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 303,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/33/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/33/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Turnaround Standby",
			fr: "Demi-tour en standby",
		},
		text: {
			en: "During your next turn, any damage done by Mawile's Swallow or Bite to your opponent's Active Pokémon is increased by 40 (before applying Weakness and Resistance).",
			fr: "Lors de votre prochain tour, tous les dégâts infligés par Avale ou Morsure de Mysdibule au Pokémon Actif de votre adversaire sont augmentés de 40 (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swallow",
			fr: "Avale",
		},
		text: {
			en: "Remove from Mawile the number of damage counters equal to the damage you did to the Defending Pokémon.",
			fr: "Retirez à Mysdibule autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
