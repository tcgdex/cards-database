import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-26",
	localId: 26,

	// Card informations
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/26/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/26/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/26/high",
		},
	},

	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Knock Off",
			fr: "Sabotage",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking and discard it.",
			fr: "Choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jet Smash",
			fr: "Éclat'jet",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 70 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Empoleon can't use Jet Smash during your next turn.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 70 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Pingoléon ne peut pas utiliser Écras'jet lors de votre prochain tour.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
