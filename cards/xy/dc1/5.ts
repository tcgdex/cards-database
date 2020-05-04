import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Team Aqua's Walrein",
		fr: "Kaimorse de la Team Aqua",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 365,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/5/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/5/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/5/high",
		},
	},

	evolveFrom: {
		en: "Team Aqua's Sealeo",
		fr: "Phogleur de la Team Aqua",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Power Blow",
			fr: "Coup Puissant",
		},
		text: {
			en: "This attack does 30 damage times the amount of Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies attachées à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dual Blizzard",
			fr: "Double Blizzard",
		},
		text: {
			en: "Discard 2 Water Energy attached to this Pokémon. This attack does 80 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies Water attachées à ce Pokémon. Cette attaque inflige 80 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
