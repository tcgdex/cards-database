import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-38",
	localId: 38,

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
			en: "https://assets.tcgdex.net/en/sm/sm35/38/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/38/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Whiny Voice",
			fr: "Voix Suppliante",
		},
		text: {
			en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Feverish Kiss",
			fr: "Bise Fébrile",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
