import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-26",
	localId: 26,

	// Card informations
	name: {
		en: "Walrein",
		fr: "Kaimorse",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 365,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/26/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/26/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/26/high",
		},
	},

	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Powder Snow",
			fr: "Poudreuse",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Big Tusk",
			fr: "Défenses Puissantes",
		},
		text: {
			en: "This attack does 120 damage minus 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 120 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
