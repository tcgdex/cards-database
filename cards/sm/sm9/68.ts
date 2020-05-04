import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-68",
	localId: 68,

	// Card informations
	name: {
		en: "Jynx",
		fr: "Lippoutou",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 124,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/68/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/68/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "HYOGONOSUKE",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dazzle Dance",
			fr: "Danse Éblouissante",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Mysterious Dance",
			fr: "Danse Mystérieuse",
		},
		text: {
			en: "For each of your opponent's Benched Pokémon, put 1 damage counter on your opponent's Pokémon in any way you like.",
			fr: "Pour chaque Pokémon de Banc de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
