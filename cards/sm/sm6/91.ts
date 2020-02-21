import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-91",
	localId: 91,

	// Card informations
	name: {
		en: "Goomy",
		fr: "Mucuscule",
	},

	hp: 40,

	type: [
		Type.DRAGON,
	],

	dexId: 704,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/91/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/91/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 1336,
		type: AbilityType.TALENT,
		name: {
			en: "Sticky Membrane",
			fr: "Membrane Gluante",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Pokémon's attacks cost Colorless more.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques des Pokémon de votre adversaire coûtent Colorless de plus.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
