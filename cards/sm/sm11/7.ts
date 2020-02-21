import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-7",
	localId: 7,

	// Card informations
	name: {
		en: "Sewaddle",
		fr: "Larveyette",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 540,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/7/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/7/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},

	abilities: [{
		id: 1388,
		type: AbilityType.TALENT,
		name: {
			en: "Swaddling Leaves",
			fr: "Feuillage Enveloppant",
		},
		text: {
			en: "This Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
