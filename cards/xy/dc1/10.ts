import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-10",
	localId: 10,

	// Card informations
	name: {
		en: "Team Magma's Baltoy",
		fr: "Balbuto de la Team Magma",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 343,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/10/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/10/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Telekinesis",
			fr: "Lévikinésie",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
