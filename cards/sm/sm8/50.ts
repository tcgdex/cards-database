import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-50",
	localId: 50,

	// Card informations
	name: {
		en: "Litleo",
		fr: "Hélionceau",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 667,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/50/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/50/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},

	abilities: [{
		id: 1340,
		type: AbilityType.TALENT,
		name: {
			en: "Wild Dash",
			fr: "Panique Sauvage",
		},
		text: {
			en: "If your opponent has any Pokémon-GX or Pokémon-EX in play, this Pokémon has no Retreat Cost.",
			fr: "Si votre adversaire a au moins un Pokémon-GX ou Pokémon-EX en jeu, ce Pokémon n’a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s’inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
