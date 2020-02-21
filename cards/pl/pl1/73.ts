import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-73",
	localId: 73,

	// Card informations
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 206,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/73/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/73/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		name: {
			en: "Call for Family",
			fr: "Appel à la famille",
		},
		text: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spring Out",
			fr: "Surgir",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
