import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-26",
	localId: 26,

	// Card informations
	name: {
		en: "Seismitoad",
		fr: "Crapustule",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 537,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/26/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/26/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/26/high",
		},
	},

	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Seismic Punch",
			fr: "Poing Sismique",
		},
		text: {
			en: "Does 30 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 30 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Splashing Turn",
			fr: "Tour Éclaboussant",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
