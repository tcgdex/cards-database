import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-42",
	localId: 42,

	// Card informations
	name: {
		en: "Vaporeon",
		fr: "Aquali",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/42/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/42/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/42/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",

	abilities: [{
		id: 1304,
		type: AbilityType.TALENT,
		name: {
			en: "Vitality Cheer",
			fr: "Bravos Vivifiants",
		},
		text: {
			en: "Your Pokémon-GX in play that evolve from Eevee get +60 HP. You can't apply more than 1 Vitality Cheer Ability at a time.",
			fr: "Vos Pokémon-GX en jeu qui évoluent d’Évoli ont +60 PV. Vous ne pouvez pas utiliser plus d’un talent Bravos Vivifiants à la fois.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Refreshing Rain",
			fr: "Ondée Rafraîchissante",
		},
		text: {
			en: "Heal 30 damage from each of your Pokémon.",
			fr: "Soignez 30 dégâts à chacun de vos Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
