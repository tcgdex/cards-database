import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-37",
	localId: 37,

	// Card informations
	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 584,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/37/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/37/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/37/high",
		},
	},

	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Enefountain",
			fr: "Fontaine d'Énergie",
		},
		text: {
			en: "Attach 2 basic Energy cards from your hand to 1 of your Pokémon.",
			fr: "Attachez 2 cartes Énergie de base de votre main à 1 de vos Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Blizzard",
			fr: "Blizzard",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
