import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-101",
	localId: 101,

	// Card informations
	name: {
		en: "Necrozma",
		fr: "Necrozma",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 800,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/101/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/101/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Barrier Attack",
			fr: "Attaque d’Obstacle",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Special Laser",
			fr: "Laser Spécial",
		},
		text: {
			en: "If this Pokémon has any Special Energy attached to it, this attack does 60 more damage.",
			fr: "Si de l’Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
