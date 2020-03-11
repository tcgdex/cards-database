import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-25",
	localId: 25,

	// Card informations
	name: {
		en: "Flareon",
		fr: "Pyroli",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/25/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/25/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/25/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "AKIRA EGAWA",

	abilities: [{
		id: 1372,
		type: AbilityType.TALENT,
		name: {
			en: "Power Cheer",
			fr: "Bravos Puissants",
		},
		text: {
			en: "The attacks of your Pokémon-GX in play that evolve from Eevee do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You can't apply more than 1 Power Cheer Ability at a time.",
			fr: "Les attaques de vos Pokémon-GX en jeu qui évoluent d’Évoli infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Bravos Puissants à la fois.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
