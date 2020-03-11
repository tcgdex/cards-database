import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-43",
	localId: 43,

	// Card informations
	name: {
		en: "Azelf",
		fr: "Créfadet",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 482,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/43/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/43/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Psychic Abduction",
			fr: "Enlèvement Psy",
		},
		text: {
			en: "You can use this attack only if you go second, and only on your first turn. Shuffle 1 of your opponent's Benched Pokémon and all cards attached to it into their deck.",
			fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Mélangez l’un des Pokémon de Banc de votre adversaire et toutes les cartes qui lui sont attachées avec son deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
