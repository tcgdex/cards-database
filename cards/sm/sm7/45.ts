import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-45",
	localId: 45,

	// Card informations
	name: {
		en: "Regice",
		fr: "Regice",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 378,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/45/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/45/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},

	abilities: [{
		id: 1172,
		type: AbilityType.TALENT,
		name: {
			en: "Icy Barrier",
			fr: "Barrière Glaciale",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Stadium cards from their hand.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Stade de sa main.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Icy Wind",
			fr: "Vent Glace",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
