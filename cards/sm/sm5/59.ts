import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-59",
	localId: 59,

	// Card informations
	name: {
		en: "Cresselia",
		fr: "Cresselia",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 488,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/59/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/59/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "chibi",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Lunar Payback",
			fr: "Vengeance Lunaire",
		},
		text: {
			en: "Discard an Energy from this Pokémon. If you do, switch all damage counters on this Pokémon with those on your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, échangez tous les marqueurs de dégâts de ce Pokémon avec ceux du Pokémon Actif de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
